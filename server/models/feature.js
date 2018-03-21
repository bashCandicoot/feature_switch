module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('features', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [0, 60],
          msg: 'name must be no longer than 60 characters.',
        },
      },
    },
    emails: {
      // I would use an array here, but to keep things simple
      // because I'm using sqlite, emails will be a comma
      // seperated string
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [0, 500],
          msg: 'emails must be no longer than 500 characters.',
        },
      },
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ratio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 5],
          msg: 'ratio must be between 3-5 characters.',
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  }, {});
  // Feature.associate = (models) => {
  //   console.log(models);
  //   // associations can be defined here
  // };
  return Feature;
};
