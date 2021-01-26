const bcrypt = require('bcryptjs')
const { saltRounds } = require('../env')

class PasswordHandler {
  static async genPassword(password) {
    return await bcrypt.hash(password, saltRounds)
  }

  static async comparePasswords(pPassword, sPassword) {
    return await bcrypt.compare(pPassword, sPassword)
  }
}

module.exports = {
  PasswordHandler
}
