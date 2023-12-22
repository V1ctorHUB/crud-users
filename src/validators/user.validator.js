const { param, body } = require("express-validator");

const createUserValidator = [
    body('name')
        .isString().withMessage("Name should be a string")
        .trim()
        .notEmpty()
        .isLength({ min: 3, max: 100 })
        .withMessage("Name should have between 3 and 100 characters")
        .isAlpha().withMessage("Name is only letters"),

    body('email')
        .isString().withMessage("review should be a string")
        .trim()
        .isEmail().withMessage("Enter a valid email"),

    body('password')
        .isString().withMessage("cover should be a string")
        .isLength({ min: 8 }).withMessage("password must be at least 8 characters")
];

const updateUserValidator = [
    body('name')
        .optional()
        .isString().withMessage("Name should be a string")
        .trim()
        .notEmpty()
        .isLength({ min: 3, max: 100 })
        .withMessage("Name should have between 3 and 100 characters")
        .isAlpha().withMessage("Name is only letters"),

    body('email')
        .optional()
        .isString().withMessage("review should be a string")
        .trim()
        .isEmail().withMessage("Enter a valid email"),

    body('password')
        .optional()
        .isString().withMessage("cover should be a string")
        .isLength({ min: 8 }).withMessage("password must be at least 8 characters")
];

//se asegura que el id no sea un campo vacio y que sea un id valido de mongodb
const idInParams = [
    param("id")
        .notEmpty().withMessage("id field is required")
        .isMongoId().withMessage("id must be mongo id")
];

module.exports = { idInParams, updateUserValidator, createUserValidator }