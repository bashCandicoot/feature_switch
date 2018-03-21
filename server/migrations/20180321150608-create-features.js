module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('features', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    emails: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    enabled: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    ratio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable('features'),
};
