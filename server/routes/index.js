const routes = require('express').Router();
const features = require('./features');

routes.use('/features', features);

module.exports = routes;
