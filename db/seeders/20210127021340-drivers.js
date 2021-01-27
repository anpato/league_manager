'use strict'
const faker = require('faker')
const uuid = require('uuid').v4
const { PasswordHandler } = require('../../helpers')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let platforms = ['Pc', 'Xbox', 'Ps']
    const drivers = await Promise.all(
      [...Array(50)].map(async (_) => ({
        id: uuid(),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: `${faker.internet.email()}`,
        password_digest: await PasswordHandler.genPassword('1234'),
        platform_id: faker.random.alphaNumeric(6),
        platform: platforms[Math.floor(Math.random() * platforms.length)],
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    )
    return await queryInterface.bulkInsert('drivers', drivers)
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('drivers')
  }
}
