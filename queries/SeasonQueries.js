const { Season, Standings, Division } = require('../db/models')
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

const AddSeason = async (req, res, next) => {
  try {
    const season = await Season.create({
      ...req.body,
      leagueId: req.query.league_id
    })
    res.send(season)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

module.exports = {
  ViewSeasons,
  AddSeason
}
