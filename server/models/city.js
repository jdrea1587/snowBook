'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  City.init(
    {
      userId: Sequelize.INTEGER,
      storeId: Sequelize.INTEGER,
      resorts: Sequelize.STRING,
      name: Sequelize.STRING,
      ratings: Sequelize.INTEGER,
      review: Sequelize.INTEGER
    },
    {
      sequelize,
      modelName: 'City',
      tableName: 'cities'
    }
  );
  return City;
};
