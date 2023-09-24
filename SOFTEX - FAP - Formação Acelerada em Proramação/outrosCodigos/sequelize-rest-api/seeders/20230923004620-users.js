'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) =>  queryInterface.bulkInsert(
    'Users', 
    [
      {
        nome: 'Luis',
        email: 'luis@test.com',
        idade: 27,
      },
      {
        nome: 'Fernando',
        email: 'fernando@test.com',
        idade: 35,

      },
      {
        nome: 'Junior',
        email: 'junior@test.com',
        idade: 40,
      },
    ], 
    {}
    ),
    

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),};