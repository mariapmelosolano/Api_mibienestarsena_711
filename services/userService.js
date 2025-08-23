const db = require('../models');

const getAllUsers = async () => {
    try {
        let users = await db.User.findAll({
            include: [{
                model: db.Rol,
                as: 'rol',
                required: false,
                attributes: ["id", "name"]
            }]
        });
        return users;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener usuarios" };
    }
};

const getUser = async (id) => {
    try {
        let user = await db.User.findByPk(id, {
            include: [{
                model: db.Rol,
                as: 'rol',
                required: false,
                attributes: ["id", "name"]
            }]
        });
        if (!user) {
            throw { status: 404, message: "Usuario no encontrado" };
        }
        return user;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || "Fallo al obtener usuario" };
    }
};

const createUser = async (userData) => {
    try {
        let newUser = await db.User.create(userData);
        return newUser;
    } catch (error) {
        throw { status: 500, message: error.message || "Usuario no pudo ser creado" };
    }
};

const updateUser = async (id, userData) => {
    try {
        const [updated] = await db.User.update(userData, {
            where: { id }
        });
        
        if (updated === 0) {
            throw { status: 404, message: "Usuario no encontrado" };
        }
        
        const updatedUser = await db.User.findByPk(id, {
            include: [{
                model: db.Rol,
                as: 'rol',
                required: false,
                attributes: ["id", "name"]
            }]
        });
        return updatedUser;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || "Usuario no pudo ser actualizado" };
    }
};

const deleteUser = async (id) => {
    try {
        const deleted = await db.User.destroy({
            where: { id }
        });
        
        if (deleted === 0) {
            throw { status: 404, message: "Usuario no encontrado" };
        }
        
        return { message: "Usuario eliminado exitosamente" };
    } catch (error) {
        throw { status: error.status || 500, message: error.message || "Usuario no pudo ser eliminado" };
    }
};

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};