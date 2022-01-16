'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skistores', [
      {
        name: 'Sun & Ski Sports',
        address: '761-A W Anemone Trail, Dillon, CO 80435',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Slope Style',
        address: '110 S Main St unit a, Breckenridge, CO 80424',
        rentalsOffered: false,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pup\'s Glide Shop',
        address: '107 Ski Hill Rd, Breckenridge, CO 80424',
        rentalsOffered: false,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stapleton Ski',
        address: '430 S Spring St, Aspen, CO 81611',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Ski Shop Aspen',
        address: '516 E Durant Ave, Aspen, CO 81611',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'West Coast Sports',
        address: '1675 W 4th Ave, Vancouver, BC V6J 1L8, Canada',
        rentalsOffered: false,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jo-E Ski & Snowboard Rentals',
        address: '766 Denman St, Vancouver, BC V6G 2L5, Canada',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'AJ Motion Sports',
        address: '1956 E 9400 S, Sandy, UT 84093',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utah Ski & Golf',
        address: '134 W 600 S, Salt Lake City, UT 84101',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Grizzly Outfitters',
        address: '11 Lone Peak Dr #101, Big Sky, MT 59716',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Christy Sports',
        address: '39 Black Eagle Rd, Big Sky, MT 59716',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Big Sky Vacation Rentals',
        address: '1569 Lone Mountain Trail, Big Sky, MT 59716',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cottam\'s Ski Shops',
        address: '207 Paseo Del Pueblo Sur, Taos, NM 87571',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'evo Portland Store',
        address: '200 SE Martin Luther King Jr Blvd, Portland, OR 97214',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hoback Sports',
        address: '520 W Broadway, Jackson, WY 83001',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alaska Outdoor Gear Rental',
        address: '540 W Potter Dr, Anchorage, AK 99518',
        rentalsOffered: true,
        guidesOffered: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skistores', null, {});

  }
};
