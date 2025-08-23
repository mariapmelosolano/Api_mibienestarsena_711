'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rols', [
      {
        name: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moderador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Invitado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Supervisor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rols', null, {});
  }
};