'use strict'
const { Division, Driver, Team } = require('../models')
const uuid = require('uuid').v4
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const divisions = await Division.findAll({ raw: true, attributes: ['id'] })
    const driverTeams = await Promise.all(
      [...Array(divisions.length * 2)].map(async (_, index) => {
        let driver = await Driver.findOne({
          order: Sequelize.literal('random()'),
          raw: true,
          attributes: ['id']
        })
        const team = await Team.findOne({
          order: Sequelize.literal('random()'),
          raw: true,
          attributes: ['id']
        })
        return {
          id: uuid(),
          driver_number: faker.random.number({ min: 1, max: 99 }),
          division_id: divisions[Math.floor(index / 2)].id,
          driver_id: driver.id,
          team_id: team.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return await queryInterface.bulkInsert('driver_teams', driverTeams)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('driver_teams')
  }
}
