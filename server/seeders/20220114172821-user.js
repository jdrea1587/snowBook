'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        interest: 'Skiing',
        level: 'intermediate',
        firstName: 'Rob',
        typeOfRide: 'Ski',
        isBackcountry: true,
        gender: 'Male',
        personalStory: 'I love to Ski. Love the Mountains. Skiing is Life',
        contactInfo: 'robwilliams0221@gmail.com',
        isInstructor: false,
        isOver21: true,
        lastName: 'Williams',
        zipCode: 80304,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        interest: 'Snowboarding',
        level: 'advanced',
        firstName: 'Josh',
        typeOfRide: 'Snowboard',
        isBackcountry: true,
        gender: 'He/They',
        personalStory: 'Ride the white wave. Rip and dip!',
        contactInfo: 'joshdanielrea@gmail.com',
        isInstructor: true,
        isOver21: true,
        lastName: 'Rea',
        zipCode: 60618,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        interest: 'Snowboarding',
        level: 'beginner',
        firstName: 'Michael',
        typeOfRide: 'Snowboard',
        isBackcountry: false,
        gender: 'Male',
        personalStory: "I'm new to this and want to learn!",
        contactInfo: 'therealmichaelnewman@gmail.com',
        isInstructor: false,
        isOver21: true,
        lastName: 'Newman',
        zipCode: 11101,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        interest: 'Snowboarding',
        level: 'intermediate',
        firstName: 'Soul',
        typeOfRide: 'Snowboard',
        isBackcountry: false,
        gender: 'Male',
        personalStory:
          "I love to snowboard but I don't have any friends to go with, please reach out!",
        contactInfo: 'lee.soul12@gmail.com',
        isInstructor: false,
        isOver21: true,
        lastName: 'Lee',
        zipCode: 31909,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
