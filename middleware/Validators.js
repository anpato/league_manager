const uuid = require('uuid')
const { errorMethods } = require('./ErrorHandlers')

class Validators {
  static checkId(req, res, next, key) {
    if (uuid.validate(req.params[key])) {
      return next()
    }
    next(errorMethods.custom(400, 'Invalid Id'))
  }
}

module.exports = Validators
