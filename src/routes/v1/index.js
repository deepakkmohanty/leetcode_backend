const express = require('express');
const problemRoute = require('./problems.route')
const v1Routes = express.Router();

v1Routes.use('/problem',problemRoute);

module.exports = v1Routes;
