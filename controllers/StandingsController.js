const { buildRouter } = require('../helpers')
const Validators = require('../middleware/Validators')
const {
  ViewStandings,
  UpdateStandings
} = require('../queries/StandingsQueries')

let router = require('express').Router()

const controller = [
  {
    path: '/:season_id',
    method: 'get',
    middleware: [
      (req, res, next) => Validators.checkId(req, res, next, 'season_id')
    ],
    fn: ViewStandings
  },
  {
    path: '/:season_id',
    method: 'put',
    middleware: [],
    fn: UpdateStandings
  }
]

router = buildRouter(router, controller)

module.exports = { path: '/standings', router }
