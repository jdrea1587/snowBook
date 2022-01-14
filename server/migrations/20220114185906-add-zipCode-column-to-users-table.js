'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'zipCode', Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'zipCode', Sequelize.INTEGER);
  }
};
