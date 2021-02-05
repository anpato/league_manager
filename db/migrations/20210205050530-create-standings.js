'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('standings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      driverStandings: {
        field: 'driver_standings',
        type: Sequelize.JSONB,
        get: function (value) {
          let stands = this.getDataValue(value)
          if (stands.length) {
            return JSON.parse(this.getDataValue(value))
          }
          return stands
        },
        set: function (value) {
          return this.setDataValue(JSON.stringify(value))
        }
      },
      constructorStandings: {
        field: 'constructor_standings',
        type: Sequelize.JSONB,
        get: function (value) {
          let stands = this.getDataValue(value)
          if (stands.length) {
            return JSON.parse(this.getDataValue(value))
          }
          return stands
        },
        set: function (value) {
          return this.setDataValue(JSON.stringify(value))
        }
      },
      seasonId: {
        type: Sequelize.UUID,
        field: 'season_id',
        references: {
          model: 'seasons',
          key: 'id'
        }
      },
      divisionId: {
        type: Sequelize.UUID,
        field: 'division_id',
        references: {
          model: 'divisions',
          key: 'id'
        }
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
    await queryInterface.dropTable('standings')
  }
}
