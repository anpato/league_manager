const { buildRouter } = require('../helpers')
const Validators = require('../middleware/Validators')
const {
  CreateLeague,
  GetLeague,
  GetLeagues,
  UpdateLeague,
  DropLeague
} = require('../queries/LeagueQueries')

let router = require('express').Router()

let controller = []

router = buildRouter(router, controller)

module.exports = { path: '/drivers', router }
