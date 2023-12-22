const httpError = require("http-errors");
const User = require("../models/user.model");


const createUser = async (req, res, next) => {
    try {
        const { body } = req;
        const newUser = new User(body);
        const savedUser = await newUser.save();
        if (!savedUser) throw httpError(500, "User not created");

        res.status(201).json({ message: "User created", data: savedUser });
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) throw httpError(404, "Users not found");
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getOneUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) throw httpError(404, "User not found");
        res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
};


const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const toUpdateUser = await User.findById(id);
        if (!toUpdateUser) throw httpError(404, "User not found");
        const updatedUser = await User.findByIdAndUpdate(id, body, {
            new: true,
        });
        if (!updatedUser) throw httpError(500, "User not updated");
        res.status(200).json({ message: "User updated", data: updatedUser });
    } catch (error) {
        next(error);
    }
};

const deleteOneUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) throw httpError(404, "User not found");
        res.status(200).json({ data: "User Deleted" });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    updateUser,
    getOneUser,
    getAllUsers,
    createUser,
    deleteOneUser
}