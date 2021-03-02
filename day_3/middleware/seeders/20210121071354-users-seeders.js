'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  * Add seed commands here.
    //  *
     await queryInterface.bulkInsert('users', 
     [
       {
      username: "Kurniawan",
      password: "Kurniawan123!",
      age:22,
      email: "kurniawantrii24@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
        {
      username: "Kosim",
      password: "Kosim123!",
      age:15,
      email: "kosim@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
        }
    ], 
      {}
      );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete("users", null, {});
  },
};
