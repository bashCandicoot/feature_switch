const features = require('express').Router();
const featuresController = require('../../controllers').features;

features.get('/email/:email', featuresController.get);
features.put('/:id', featuresController.update);
features.post('/', featuresController.create);
features.delete('/:id', featuresController.destroy);

module.exports = features;
