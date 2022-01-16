'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cities', [
      {
        name: 'Summit County, Colorado',  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aspen, Colorado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vancouver, British Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salt Lake City, Utah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Colorado Springs, Colorado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blue Mountain, Ontario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vermont',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Big Sky, Montana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taos, New Mexico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Portland, Oregon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jackson Hole, Wyoming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anchorage, Alaska',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  }
};
