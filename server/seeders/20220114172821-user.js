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
        zipCide: 80304
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
        zipCide: 60618
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
        zipCide: 11101
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
        zipCide: 31909
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
