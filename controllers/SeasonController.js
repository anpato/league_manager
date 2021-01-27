const { buildRouter } = require('../helpers')
const Validators = require('../middleware/Validators')
const { ViewStandings } = require('../queries/SeasonQueries')

let router = require('express').Router()

const controller = [
  {
    path: '/standings/:season_id',
    method: 'get',
    middleware: [
      (req, res, next) => Validators.checkId(req, res, next, 'season_id')
    ],
    fn: ViewStandings
  }
  // {
  //   path: '/list/:season_id',
  //   method: 'get'
  //   // fn:
  // }
]

router = buildRouter(router, controller)

module.exports = { path: '/seasons', router }
