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

let controller = [
  {
    path: '/register/:owner_id',
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
  },
  {
    path: '/update/:league_id',
    method: 'put',
    middleware: [],
    fn: UpdateLeague
  },
  {
    path: '/:owner_id/remove/:league_id',
    method: 'delete',
    middleware: [],
    fn: DropLeague
  }
]

router = buildRouter(router, controller)

module.exports = { path: '/leagues', router }
