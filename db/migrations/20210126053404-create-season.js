'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('seasons', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      driverStandings: {
        field: 'driver_standings',
        type: Sequelize.JSONB
      },
      constructorStandings: {
        field: 'constructor_standings',
        type: Sequelize.JSONB
      },
      season: Sequelize.STRING,
      leagueId: {
        type: Sequelize.UUID,
        references: {
          model: 'leagues',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('seasons')
  }
}
