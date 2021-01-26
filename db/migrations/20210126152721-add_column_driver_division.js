'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('divisions', 'driver_id', {
      type: Sequelize.UUID,
      references: {
        model: 'drivers',
        key: 'id'
      },
      onDelete: 'CASCADE'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('divisions', 'driver_id')
  }
}
