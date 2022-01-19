'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'image', Sequelize.STRING);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'image', Sequelize.STRING);
  }
};
