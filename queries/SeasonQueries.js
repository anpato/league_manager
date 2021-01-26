const { Season } = require('../db/models')
const { errorMethods } = require('../middleware/ErrorHandlers')

const ViewSeasons = async (req, res, next) => {
  try {
    const seasons = await Season.findAll({
      where: { leagueId: req.params.league_id }
    })
    res.send(seasons)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

const ViewStandings = async (req, res, next) => {
  try {
    const standings = await Season.findByPk(req.params.season_id)
    res.send(standings)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

module.exports = {
  ViewSeasons,
  ViewStandings
}
