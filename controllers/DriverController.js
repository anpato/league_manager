const { buildRouter } = require('../helpers')
const Validators = require('../middleware/Validators')
const {
  AddDriver,
  ApplyDriverDivision,
  ReviewDriverApplication,
  DropDriver
} = require('../queries/DriverQueries')

let router = require('express').Router()

let controller = [
  {
    path: '/auth/register',
    method: 'post',
    middleware: [],
    fn: AddDriver
  },
  {
    // * Endpoint Format
    // ?driver_id=uuid&division_id=uuid&team_id=uuid
    path: '/apply',
    method: 'post',
    middleware: [],
    fn: ApplyDriverDivision
  },
  {
    path: '/applications/:driver_team_id',
    method: 'put',
    middleware: [],
    fn: ReviewDriverApplication
  },
  {
    path: '/applications/drop/:driver_team_id',
    method: 'delete',
    middleware: [],
    fn: DropDriver
  }
]

router = buildRouter(router, controller)

module.exports = { path: '/drivers', router }
