'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DriverTeams', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      driverNumber: {
        type: Sequelize.INTEGER,
        field: 'driver_number'
      },
      teamId: {
        type: Sequelize.UUID,
        field: 'team_id',
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      driverId: {
        type: Sequelize.UUID,
        field: 'driver_id',
        references: {
          model: 'drivers',
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
    await queryInterface.dropTable('DriverTeams')
  }
}
