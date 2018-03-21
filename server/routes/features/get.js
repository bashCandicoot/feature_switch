const db = require('../../models/index');
const Sequelize = require('sequelize');

const op = Sequelize.Op;

module.exports = (req, res) => {
  db.sequelize.models.features.findAll({
    where: {
      emails: {
        [op.like]: `%${req.params.email}%`,
      },
    },
  })
    .then(features => res.status(200).json({ features }));
};
