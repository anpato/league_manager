'use strict'
const uuid = require('uuid').v4
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const faker = require('faker')
    const leagues = [...Array(100)].map((_) => ({
      id: uuid(),
      name: faker.random.word({ length: 5 }),
      region: faker.random.locale(),
      logo: faker.image.avatar(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    return await queryInterface.bulkInsert('leagues', leagues)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('leagues')
  }
}
