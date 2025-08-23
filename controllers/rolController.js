const rolService = require('../services/rolService');

const getAllRols = async (req, res) => {
    try {
        const allRols = await rolService.getAllRols();
        res.status(200).send({ status: "OK", data: allRols });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const getRol = async (req, res) => {
    let id = req.params.rolId; 
    try {
        const rol = await rolService.getRol(id);
        res.status(200).send({ status: "OK", data: rol });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createRol = async (req, res) => {
    const { body } = req;
    try {
        const createdRol = await rolService.createRol(body);
        res.status(201).send({ status: "OK", data: createdRol });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const updateRol = async (req, res) => {
    let id = req.params.rolId; 
    let { name } = req.body;
    try {
        const updatedRol = await rolService.updateRol(id, name);
        res.status(200).send({ status: "OK", data: updatedRol });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const deleteRol = async (req, res) => {
    let id = req.params.rolId;
    try {
        const deletedRol = await rolService.deleteRol(id);
        res.status(200).send({ status: "OK", data: deletedRol });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

module.exports = {
    getAllRols,
    getRol,
    createRol,
    updateRol,
    deleteRol
};