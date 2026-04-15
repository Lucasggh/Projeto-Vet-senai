'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consultas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      animal_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'animais',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      data_consulta: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      motivo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      diagnostico: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      veterinario: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('consultas')
  },
}
