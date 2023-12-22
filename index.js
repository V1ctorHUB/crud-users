require('dotenv').config();

const express = require('express');
const debug = require('debug')('api:server');
const morgan = require('morgan');
const cors = require('cors');

const envconfig = require('./src/config/env.config');
const database = require('./src/config/db.config');
const mainRouter = require('./src/routes/main.router')
const { errorHandler } = require('./src/middlewares/error.middleware');

const app = express();
database.connect();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', mainRouter);

app.use(errorHandler);

const port = envconfig.PORT;
app.listen(port, () => {
    debug(`Server is running on port ${port}`)
})