const { Driver, DriverTeam } = require('../db/models')
const { errorMethods } = require('../middleware/ErrorHandlers')

const AddDriver = async (req, res, next) => {
  try {
    const driver = await Driver.create({ ...req.body })
    res.send(driver)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

const ApplyDriverDivision = async (req, res, next) => {
  try {
    const { driver_id, division_id, team_id } = req.query
    const driverReg = await DriverTeam.create({
      ...req.body,
      driverId: driver_id,
      divisionId: division_id,
      teamId: team_id
    })
    res.send({
      msg: 'Request Submitted Successfully',
      registrationConfirmation: driverReg,
      status: 'Ok'
    })
  } catch (error) {
    next(errorMethods.default(error))
  }
}

const ReviewDriverApplication = async (req, res, next) => {
  try {
    const application = await DriverTeam.update(
      { ...req.body },
      { where: { id: req.params.driver_team_id }, returning: true }
    )
    res.send(application[0][1])
  } catch (error) {
    next(errorMethods.default(error))
  }
}

const DropDriver = async (req, res, next) => {
  try {
    await DriverTeam.destroy({ where: { id: req.params.driver_team_id } })
    res.send({
      msg: 'Driver Removed From Seat',
      id: req.params.driver_team_id,
      status: 'Ok'
    })
  } catch (error) {
    next(errorMethods.default(error))
  }
}

module.exports = {
  AddDriver,
  ApplyDriverDivision,
  ReviewDriverApplication,
  DropDriver
}
