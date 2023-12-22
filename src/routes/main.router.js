const express = require('express');
const router = express.Router();
const usersRouter = require('./user.router');

router.use('/admin', usersRouter);

module.exports = router;