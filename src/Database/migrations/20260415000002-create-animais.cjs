'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('animais', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      especie: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      raca: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      tutor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tutores',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('animais')
  },
}
