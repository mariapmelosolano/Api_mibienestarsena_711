const db = require('../models');

const getAllRols = async () => {
    try {
        let rols = await db.Rol.findAll();
        return rols;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener roles" };
    }
};

const getRol = async (id) => {
    try {
        let rol = await db.Rol.findByPk(id);
        return rol;
    } catch (error) {
        throw { status: 500, message: error.message || "Fallo al tomar rol" };
    }
};

const createRol = async (rolData) => {
    try {
        let newRol = await db.Rol.create(rolData);
        return newRol;
    } catch (error) {
        throw { status: 500, message: error.message || "Rol no pudo ser creado" };
    }
};

const updateRol = async (id, name) => {
    try {
        let updatedRol = await db.Rol.update(
            { name },
            { where: { id } }
        );
        return updatedRol;
    } catch (error) {
        throw { status: 500, message: error.message || "Rol no pudo ser actualizado" };
    }
};

const deleteRol = async (id) => {
    try {
        const deletedRol = await db.Rol.destroy({
            where: { id }
        });
        return deletedRol;
    } catch (error) {
        throw { status: 500, message: error.message || "Rol no pudo ser eliminado" };
    }
};

module.exports = {
    getAllRols,
    getRol,
    createRol,
    updateRol,
    deleteRol
};