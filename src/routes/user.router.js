const express = require("express");
const router = express.Router();

const {
    updateUser,
    getOneUser,
    getAllUsers,
    createUser,
    deleteOneUser
} = require("../controllers/user.controller");

const {
    idInParams,
    updateUserValidator,
    createUserValidator
} = require("../validators/user.validator");

const { runValidation } = require("../middlewares/validator.middleware");

router.post("/", createUserValidator, runValidation, createUser);
router.get("/", getAllUsers);
router.get("/:id", idInParams, runValidation, getOneUser);
router.put("/:id", idInParams, updateUserValidator, runValidation, updateUser);
router.delete("/:id", runValidation, deleteOneUser);

module.exports = router;