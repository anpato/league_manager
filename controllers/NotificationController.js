const { buildRouter } = require('../helpers')
const Validators = require('../middleware/Validators')
const {
  MarkApplicationViewed,
  GetNewApplications
} = require('../queries/NotificationQueries')

let router = require('express').Router()

let controller = [
  // ?league_id=uuid
  { path: '/recent', method: 'get', middleware: [], fn: GetNewApplications },
  { path: '/mark', method: 'put', middleware: [], fn: MarkApplicationViewed }
]

router = buildRouter(router, controller)

module.exports = { path: '/notifications', router }
