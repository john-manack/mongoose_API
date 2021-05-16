'use strict';

const express = require("express"),
    router = express.Router();

router.get('/', (req, res) => {
    res.json('This is where the data will live!').status(200);
});

module.exports = router;