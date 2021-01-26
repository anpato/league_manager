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

const buildRouter = (router, controller) => {
  let builtRouter = router
  controller.forEach((control) =>
    builtRouter[control.method](
      control.path,
      control.middleware || [],
      control.fn
    )
  )
  return builtRouter
}

module.exports = {
  PasswordHandler,
  buildRouter
}
