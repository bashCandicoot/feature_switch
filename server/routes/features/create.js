const db = require('../../models/index');
const Sequelize = require('sequelize');

const op = Sequelize.Op;

module.exports = (req, res) => {
  console.log(req.params, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  db.sequelize.models.features.create({
    name: req.params.name,
    emails: req.params.emails,
    enabled: req.params.enabled,
    ratio: req.params.ratio,
  })
    .then(features => res.status(200).json({ features }));
};
