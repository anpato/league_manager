const { PasswordHandler } = require('../helpers')
const { Organizer, Driver } = require('../db/models')

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
    next(error)
  }
}

const RegisterOrganizer = async (req, res, next) => {
  try {
    const { password, email, name } = req.body
    let passwordDigest = await PasswordHandler.genPassword(password)
    const organizer = await Organizer.create({ email, name, passwordDigest })
    res.send(organizer)
  } catch (error) {
    return next(error)
  }
}

const LoginDriver = async (req, res, next) => {
  try {
    const driver = await Driver.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      driver &&
      (await PasswordHandler.comparePasswords(
        driver.passwordDigest,
        req.body.password
      ))
    ) {
      return res.send(driver)
    }
  } catch (error) {
    return next(error)
  }
}

const RegisterDriver = async (req, res, next) => {
  try {
    const { email, name, password, platformId, platform } = req.body
    let passwordDigest = await PasswordHandler.genPassword(password)
    const driver = await Driver.create({
      email,
      name,
      passwordDigest,
      platform,
      platformId
    })
    res.send(driver)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  LoginOrganizer,
  RegisterOrganizer,
  LoginDriver,
  RegisterDriver
}
