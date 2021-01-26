'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('league_owners', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      organizerId: {
        type: Sequelize.UUID,
        field: 'organizer_id',
        references: {
          model: 'organizers',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      leagueId: {
        type: Sequelize.UUID,
        field: 'league_id',
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
    await queryInterface.dropTable('league_owners')
  }
}
