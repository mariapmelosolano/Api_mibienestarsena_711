const eventService = require('../services/eventService');

const getAllEvents = async (req, res) => {
    try {
        const allEvents = await eventService.getAllEvents();
        res.status(200).send({ status: "OK", data: allEvents });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const getEvent = async (req, res) => {
    let id = req.params.eventId;
    try {
        const event = await eventService.getEvent(id);
        res.status(200).send({ status: "OK", data: event });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createEvent = async (req, res) => {
    const { body } = req;
    try {
        const createdEvent = await eventService.createEvent(body);
        res.status(201).send({ status: "OK", data: createdEvent });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const updateEvent = async (req, res) => {
    let id = req.params.eventId;
    let eventData = req.body;
    try {
        const updatedEvent = await eventService.updateEvent(id, eventData);
        res.status(200).send({ status: "OK", data: updatedEvent });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const deleteEvent = async (req, res) => {
    let id = req.params.eventId;
    try {
        const deletedEvent = await eventService.deleteEvent(id);
        res.status(200).send({ status: "OK", data: deletedEvent });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};