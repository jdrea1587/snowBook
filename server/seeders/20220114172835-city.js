'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cities', [
      {
        name: 'Summit County, Colorado',
        resorts: ['Breckenridge', 'KeyStone', 'Arapahoe Basin', 'Vail', 'Loveland', 'Copper Mountain'],  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aspen, Colorado',
        resorts: ['Aspen Mountain', 'Aspen Highlands', 'Buttermilk Mountain', 'Snowmass Mountain'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vancouver, British Columbia',
        resorts: ['Whistler Blackcomb', 'Mt. Baker Ski Area', 'Sun Peaks Resort', 'Big White Ski Resort', 'Revelstoke Mountain Resort', 'SilverStar Mountain Resort', 'Kicking Horse Mountain Resort', 'Kimberley Alpine Resort'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salt Lake City, Utah',
        resorts: ['Snowbird', 'Alta Ski Area', 'Brighton Resort', 'Solitude Mountain Resort', 'Park City', 'Deer Vallley'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ontario',
        resorts: ['Blue Mountain Canada', 'Searchmont', 'Calabogie Peaks Resort', 'Horseshoe Resort', 'Mount St Louis'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vermont',
        resorts: ['Sugarbush Resort', 'Okemo Mountain Resort', 'Mount Snow Resort', 'Stratton Mountain Resort'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Montana',
        resorts: ['Big Sky Resort', 'Whitefish Mountain Resort', 'Bridger Bowl', 'Montana Snowbowl', 'Discovery', 'Blacktail', 'Red Lodge Mountain', 'A Great Divide Ski Area'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taos, New Mexico',
        resorts: ['Taos Ski Valley Resort', 'Angel Fire Ski Resort', 'Red River Ski Area', 'Sipapu Ski Resort'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oregon',
        resorts: ['Mount Hood', 'Mount Bachelor', 'Timberline Lodge', 'Mount Ashland', 'Willamette Pass'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jackson Hole, Wyoming',
        resorts: ['Snow King', 'Grand Targhee', 'Jackson Hole Mountain Resort'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anchorage, Alaska',
        resorts: ['Hilltop Ski Resort', 'Alyeska Resort'],
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  }
};
