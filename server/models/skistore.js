'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class skiStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      skiStore.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  skiStore.init(
    {
      cityId: Sequelize.INTEGER,
      rentalsOffered: Sequelize.BOOLEAN,
      address: Sequelize.STRING,
      name: Sequelize.STRING,
      services: Sequelize.STRING,
      rating: Sequelize.INTEGER,
      guidesOffered: Sequelize.BOOLEAN,
      userId: Sequelize.INTEGER
    },
    {
      sequelize,
      modelName: 'skiStore',
      tableName: 'skistores'
    }
  );
  return skiStore;
};
