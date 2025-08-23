const db = require('../models');

const getAllEvents = async () => {
    try {
        let events = await db.Event.findAll({
            include: [
                {
                    model: db.Categorie,
                    as: 'categorie',
                    attributes: ["id", "nombre", "descripcion", "imagen"]
                },
                {
                    model: db.User,
                    as: 'user',
                    attributes: ["id", "username", "email"]
                }
            ]
        });
        return events;
    } catch (error) {
        throw { status: 500, message: error.message || "Error al obtener eventos" };
    }
};

const getEvent = async (id) => {
    try {
        let event = await db.Event.findByPk(id, {
            include: [
                {
                    model: db.Categorie,
                    as: 'categorie',
                    attributes: ["id", "nombre", "descripcion", "imagen"]
                },
                {
                    model: db.User,
                    as: 'user',
                    attributes: ["id", "username", "email"]
                }
            ]
        });
        if (!event) {
            throw { status: 404, message: "Evento no encontrado" };
        }
        return event;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || "Error al obtener evento" };
    }
};

const createEvent = async (eventData) => {
    try {
        let newEvent = await db.Event.create(eventData);
        return newEvent;
    } catch (error) {
        throw { status: 500, message: error.message || "Evento no pudo ser creado" };
    }
};

const updateEvent = async (id, eventData) => {
    try {
        const [updated] = await db.Event.update(eventData, {
            where: { id }
        });
        
        if (updated === 0) {
            throw { status: 404, message: "Evento no encontrado" };
        }
        
        const updatedEvent = await db.Event.findByPk(id, {
            include: [
                {
                    model: db.Categorie,
                    as: 'categorie',
                    attributes: ["id", "nombre", "descripcion", "imagen"]
                },
                {
                    model: db.User,
                    as: 'user',
                    attributes: ["id", "username", "email"]
                }
            ]
        });
        return updatedEvent;
    } catch (error) {
        throw { status: error.status || 500, message: error.message || "Evento no pudo ser actualizado" };
    }
};

const deleteEvent = async (id) => {
    try {
        const deleted = await db.Event.destroy({
            where: { id }
        });
        
        if (deleted === 0) {
            throw { status: 404, message: "Evento no encontrado" };
        }
        
        return { message: "Evento eliminado exitosamente" };
    } catch (error) {
        throw { status: error.status || 500, message: error.message || "Evento no pudo ser eliminado" };
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};