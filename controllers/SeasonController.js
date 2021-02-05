const { buildRouter } = require('../helpers')
const Validators = require('../middleware/Validators')
const { ViewSeasons, AddSeason } = require('../queries/SeasonQueries')

let router = require('express').Router()

const controller = [
  {
    path: '/',
    method: 'get',
    middleware: [
      (req, res, next) => Validators.checkId(req, res, next, 'season_id')
    ],
    fn: ViewSeasons
  },
  {
    path: '/',
    method: 'post',
    middleware: [],
    fn: AddSeason
  }
]

router = buildRouter(router, controller)

module.exports = { path: '/seasons', router }
