'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.City, {
        foreignKey: 'userId',
        as: 'cities',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
        User.hasMany(models.skiStore, {
          foreignKey: 'userId',
          as: 'skistores',
          onDelete: 'cascade',
          onUpdate: 'cascade'
        });
    }
  }
  User.init(
    {
      cityId: DataTypes.INTEGER,
      interest: DataTypes.STRING,
      level: DataTypes.STRING,
      firstName: DataTypes.STRING,
      typeOfRide: DataTypes.STRING,
      isBackcountry: DataTypes.BOOLEAN,
      gender: DataTypes.STRING,
      personalStory: DataTypes.STRING,
      contactInfo: DataTypes.STRING,
      isInstructor: DataTypes.BOOLEAN,
      isOver21: DataTypes.BOOLEAN,
      lastName: DataTypes.STRING,
      zipCode: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  );
  return User;
};
