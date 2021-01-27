'use strict'
const uuid = require('uuid').v4

const teams = [
  {
    name: 'Mercedes',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/mercedes-logo.png.transform/2col/image.png',
    color: '#00D2BE',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/mercedes.png.transform/4col/image.png'
  },
  {
    name: 'Red Bull Racing',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/red-bull-racing-logo.png.transform/2col/image.png',
    color: '#0600ef',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/red-bull-racing.png.transform/4col/image.png'
  },
  {
    name: 'McLaren',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/mclaren-logo.png.transform/2col/image.png',
    color: '#FF8700',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/mclaren.png.transform/4col/image.png'
  },
  {
    name: 'Racing Point',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point-logo.png.transform/2col/image.png',
    color: '#F596C8',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/racing-point.png.transform/4col/image.png'
  },
  {
    name: 'Renault',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/renault-logo.png.transform/2col/image.png',
    color: '#FFF500',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/renault.png.transform/4col/image.png'
  },
  {
    name: 'Ferrari',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/ferrari-logo.png.transform/2col/image.png',
    color: '#DC0000',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/ferrari.png.transform/4col/image.png'
  },
  {
    name: 'AlphaTauri',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/alphatauri-logo.png.transform/2col/image.png',
    color: '#ffffff',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/alphatauri.png.transform/4col/image.png'
  },
  {
    name: 'Alfa Romeo Racing',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/alfa-romeo-racing-logo.png.transform/2col/image.png',
    color: '#960000',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/alfa-romeo-racing.png.transform/4col/image.png'
  },
  {
    name: 'Haas F1 Team',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/haas-f1-team-logo.png.transform/2col/image.png',
    color: '#787878',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/haas-f1-team.png.transform/4col/image.png'
  },
  {
    name: 'Williams',
    logo:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/williams-logo.png.transform/2col/image.png',
    color: '#0082fa',
    chassis:
      'https://www.formula1.com/content/dam/fom-website/teams/2020/williams.png.transform/4col/image.png'
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'teams',
      teams.map((team) => ({
        id: uuid(),
        ...team,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('teams')
  }
}
