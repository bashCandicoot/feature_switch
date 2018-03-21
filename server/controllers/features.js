const Feature = require('../models/index').sequelize.models.features;
const Sequelize = require('sequelize');

const op = Sequelize.Op;

module.exports = {
  create(req, res) {
    Feature
      .create({
        name: req.query.name,
        emails: req.query.emails,
        enabled: req.query.enabled,
        ratio: req.query.ratio,
      })
      .then(feature => res.status(201).send(feature))
      .catch(error => res.status(400).send(error));
  },

  get(req, res) {
    Feature.findAll({
      where: {
        emails: {
          [op.like]: `%${req.params.email}%`,
        },
      },
    })
      .then(features => res.status(200).json({ features }));
  },

  update(req, res) {
    Feature
      .findById(req.params.id)
      .then((feature) => {
        if (!feature) {
          return res.status(404).send({
            message: 'feature not found',
          });
        }
        return feature
          .update({
            name: req.query.name || feature.name,
            emails: req.query.emails || feature.emails,
            enabled: req.query.enabled || feature.enabled,
            ratio: req.query.ratio || feature.ratio,
          })
          .then(() => res.status(200).send(feature))
          .catch(error => res.status(400).send(error));
      });
  },

  destroy(req, res) {
    Feature
      .findById(req.params.id)
      .then((feature) => {
        if (!feature) {
          return res.status(400).send({
            message: 'feature not found',
          });
        }
        return feature
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      });
  },

};
