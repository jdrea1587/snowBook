'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'name', 'firstName');
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('users', 'firstName', 'name');
  }
};
