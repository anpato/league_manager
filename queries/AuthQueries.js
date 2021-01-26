const { PasswordHandler } = require('../helpers')
const { Organizer } = require('../db/models')

const LoginOrganizer = async (req, res, next) => {
  try {
    const organizer = await Organizer.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      organizer &&
      (await PasswordHandler.comparePasswords(
        req.body.password,
        organizer.passwordDigest
      ))
    ) {
      return res.send(organizer)
    }
  } catch (error) {
    next()
  }
}

const RegisterOrganizer = async (req, res) => {
  try {
    const { password, email, name } = req.body
    let passwordDigest = await PasswordHandler.genPassword(password)
    const organizer = await Organizer.create({ email, name, passwordDigest })
    res.send(organizer)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  LoginOrganizer,
  RegisterOrganizer
}
