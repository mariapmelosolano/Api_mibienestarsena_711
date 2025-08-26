'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Users', {
      fields: ['rolId'],
      type: 'foreign key',
      name: 'user_rol_association',
      references: {
        table: 'Rols',
        field: 'id'
      },
      onDelete: 'SET NULL',  
      onUpdate: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Users', 'user_rol_association');
  }
};