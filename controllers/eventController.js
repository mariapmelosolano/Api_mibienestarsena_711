const eventService = require('../services/eventService'); 


const createEvent = async (req, res) => {
    try {

        const { name, description, startDate, endDate, categoryId, state, maxCapacity } = req.body;
        
        const createdEvent = await eventService.createEvent(
            name, description, startDate, endDate, categoryId, state, maxCapacity
        );
        
        res.status(201).send({ status: "OK", data: createdEvent });
    } catch (error) {
        res.status(error.status || 400).send({
            status: "FAILED",
            data: { error: error.message || "Error al crear evento" }
        });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const allEvents = await eventService.getAllEvents();
        res.status(200).send({ status: "OK", data: allEvents });
    } catch (error) {
        res.status(error.status || 500).send({
            status: "FAILED",
            data: { error: error.message || "Error al obtener eventos" }
        });
    }
};
const getEvent = async (req, res) => {
    try {
        let id = req.params.eventId;
        const event = await eventService.getEvent(id); // ← Cambiado a minúscula
        res.status(200).send({ status: "OK", data: event });
    } catch (error) {
        res.status(error.status || 500).send({ 
            status: "FAILED", 
            data: { error: error.message } 
        });
    }
};

const updateEvent = async (req, res) => {
    try {
        let id = req.params.eventId; // ← Cambiado de EventId a eventId
        let { name, description, startDate, endDate, categoryId, state, maxCapacity } = req.body;
        const updatedEvent = await eventService.updateEvent( // ← Cambiado a minúscula
            id, name, description, startDate, endDate, categoryId, state, maxCapacity
        );
        res.status(200).send({ status: "OK", data: updatedEvent });
    } catch (error) {
        res.status(error.status || 400).send({
            status: "FAILED",
            data: { error: error.message || "Error al actualizar evento" }
        });
    }
};

const deleteEvent = async (req, res) => {
    try {
        let id = req.params.eventId;
        const deletedEvent = await eventService.deleteEvent(id); // ← Cambiado a minúscula
        res.status(200).send({ status: "OK", data: deletedEvent });
    } catch (error) {
        res.status(error.status || 400).send({
            status: "FAILED",
            data: { error: error.message || "Error al eliminar evento" }
        });
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};