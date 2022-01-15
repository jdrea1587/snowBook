'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.City, { foreignKey: 'userId' }),
        User.hasMany(models.skiStore, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      cityId: Sequelize.INTEGER,
      interest: Sequelize.STRING,
      level: Sequelize.STRING,
      firstName: Sequelize.STRING,
      typeOfRide: Sequelize.STRING,
      isBackcountry: Sequelize.BOOLEAN,
      gender: Sequelize.STRING,
      personalStory: Sequelize.STRING,
      contactInfo: Sequelize.STRING,
      isInstructor: Sequelize.BOOLEAN,
      isOver21: Sequelize.BOOLEAN,
      lastName: Sequelize.STRING,
      zipCode: Sequelize.INTEGER
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
