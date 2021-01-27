'use strict'
const { League, Driver } = require('../models')
const uuid = require('uuid').v4
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const leagues = await League.findAll({ raw: true, attributes: ['id'] })
    const divisions = await Promise.all(
      [...Array(leagues.length * 4)].map(async (_, index) => {
        let driver = await Driver.findOne({
          order: Sequelize.literal('random()'),
          raw: true,
          attributes: ['id']
        })
        return {
          id: uuid(),
          division: faker.random.number({ min: 1, max: 3 }),
          league_id: leagues[Math.floor(index / 4)].id,
          driver_id: driver.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    return await queryInterface.bulkInsert('divisions', divisions)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('divisions')
  }
}
