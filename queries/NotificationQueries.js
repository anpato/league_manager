const { DriverTeam, Division } = require('../db/models')
const { errorMethods } = require('../middleware/ErrorHandlers')
const { Op } = require('sequelize')

const GetNewApplications = async (req, res, next) => {
  try {
    const divisions = await Division.findAll({
      attributes: ['id'],
      where: { leagueId: req.query.league_id },
      raw: true
    })
    let divIds = divisions.map(({ id }) => id)

    const newApps = await DriverTeam.findAll({
      where: { [Op.and]: [{ divisionId: divIds }, { viewed: false }] }
    })
    res.send(newApps)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

const MarkApplicationViewed = async (req, res, next) => {
  try {
    const viewedApp = await DriverTeam.update(
      { viewed: true },
      { where: { id: req.body.notificationIds } }
    )
    res.send(viewedApp)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

module.exports = {
  GetNewApplications,
  MarkApplicationViewed
}
