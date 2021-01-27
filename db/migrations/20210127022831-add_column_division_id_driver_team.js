'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('driver_teams', 'division_id', {
      type: Sequelize.UUID,
      references: {
        model: 'divisions',
        key: 'id'
      },
      onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('driver_teams', 'division_id')
  }
}
