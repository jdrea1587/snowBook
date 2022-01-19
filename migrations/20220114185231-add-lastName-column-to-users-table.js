'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'lastName', Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'lastName', Sequelize.STRING);
  }
};
