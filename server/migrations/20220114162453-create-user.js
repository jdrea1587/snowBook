'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cityId: {
        type: Sequelize.INTEGER
      },
      interest: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      typeOfRide: {
        type: Sequelize.STRING
      },
      isBackcountry: {
        type: Sequelize.BOOLEAN
      },
      gender: {
        type: Sequelize.STRING
      },
      personalStory: {
        type: Sequelize.STRING
      },
      contactInfo: {
        type: Sequelize.STRING
      },
      isInstructor: {
        type: Sequelize.BOOLEAN
      },
      isOver21: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
