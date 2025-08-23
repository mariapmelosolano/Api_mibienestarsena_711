const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers();
        res.status(200).send({ status: "OK", data: allUsers });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const testUserAPI = (req, resp) =>{
    console.log('TestUserAPI');
    resp.status(200).send({
        "status":"OK",
        "message": "API User state: available"
    });
};

const getUser = async (req, res) => {
    let id = req.params.userId;
    try {
        const user = await userService.getUser(id);
        res.status(200).send({ status: "OK", data: user });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createUser = async (req, res) => {
    const { body } = req;
    try {
        const createdUser = await userService.createUser(body);
        res.status(201).send({ status: "OK", data: createdUser });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const updateUser = async (req, res) => {
    let id = req.params.userId;
    let userData = req.body;
    try {
        const updatedUser = await userService.updateUser(id, userData);
        res.status(200).send({ status: "OK", data: updatedUser });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

const deleteUser = async (req, res) => {
    let id = req.params.userId;
    try {
        const deletedUser = await userService.deleteUser(id);
        res.status(200).send({ status: "OK", data: deletedUser });
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
};

module.exports = {
    testUserAPI,
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};