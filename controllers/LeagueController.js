const { buildRouter } = require('../helpers')
const Validators = require('../middleware/Validators')
const {
  CreateLeague,
  GetLeague,
  GetLeagues
} = require('../queries/LeagueQueries')

let router = require('express').Router()

let controller = [
  {
    path: '/',
    method: 'post',
    fn: CreateLeague
  },
  {
    path: '/:league_id',
    method: 'get',
    middleware: [
      (req, res, next) => Validators.checkId(req, res, next, 'league_id')
    ],
    fn: GetLeague
  },
  {
    path: '/',
    method: 'get',
    middleware: [],
    fn: GetLeagues
  }
]

router = buildRouter(router, controller)

module.exports = { path: '/leagues', router }
