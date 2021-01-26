const { buildRouter } = require('../helpers')
const { ViewStandings } = require('../queries/SeasonQueries')

let router = require('express').Router()

const controller = [
  {
    path: '/standings/:season_id',
    method: 'get',
    middleware: [],
    fn: ViewStandings
  }
]

router = buildRouter(router, controller)

module.exports = { path: '/seasons', router }
