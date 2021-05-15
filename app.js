'use strict';

const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3000;

const express = require('express'),
    app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
})

const rootController = require('./routes/index');

app.use('/', rootController);
