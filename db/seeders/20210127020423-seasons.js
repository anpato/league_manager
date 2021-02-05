'use strict'
const { League } = require('../models')
const uuid = require('uuid').v4
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const leagues = await League.findAll({ raw: true })
    const seasons = [...Array(leagues.length * 4)].map((_, index) => ({
      id: uuid(),
      season: faker.random.number({ min: 1, max: 6 }),
      league_id: leagues[Math.floor(index / 4)].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    return await queryInterface.bulkInsert('seasons', seasons)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('seasons')
  }
}
