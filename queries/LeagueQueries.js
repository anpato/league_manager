const { League, LeagueOwner, Season, Driver } = require('../db/models')
const { errorMethods } = require('../middleware/ErrorHandlers')

const CreateLeague = async (req, res, next) => {
  try {
    const league = await League.create({ ...req.body })
    const { dataValues } = league
    const leagueOwner = await LeagueOwner.create({
      organizerId: req.params.organizer_id,
      leagueId: dataValues.id
    })
    res.send({ leagueOwner, league })
  } catch (error) {
    return next(errorMethods.default(error))
  }
}

const GetLeagues = async (req, res, next) => {
  try {
    const leagues = await League.findAll()
    res.send(leagues)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

const GetLeague = async (req, res, next) => {
  try {
    const league = await League.findByPk(req.params.league_id, {
      include: [{ model: Season }, { model: Driver, as: 'drivers' }]
    })
    if (!league) {
      return next(errorMethods.custom(404, 'League Not Found'))
    }
    res.send(league)
  } catch (error) {
    return next(errorMethods.default(error))
  }
}

// const

module.exports = {
  CreateLeague,
  GetLeague,
  GetLeagues
}
