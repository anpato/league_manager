const {
  League,
  LeagueOwner,
  Season,
  Driver,
  DriverTeam,
  Division,
  Team,
  Standings
} = require('../db/models')
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
    console.log('hi')
    const league = await League.findByPk(req.params.league_id, {
      include: [Season]
    })
    if (!league) {
      return next(errorMethods.custom(404, 'League Not Found'))
    }
    res.send(league)
  } catch (error) {
    return next(errorMethods.default(error))
  }
}

const UpdateLeague = async (req, res, next) => {
  try {
    const league = await League.update(
      { ...req.body },
      { where: { id: req.params.league_id }, returning: true }
    )
    res.send(league[0][1])
  } catch (error) {
    return next(errorMethods.default(error))
  }
}

const DropLeague = async (req, res, next) => {
  try {
    await League.destroy({ where: { id: req.params.league_id } })
    res.send({
      msg: 'League Successfully Deleted',
      leagueId: req.params.league_id
    })
  } catch (error) {
    return next(errorMethods.default(error))
  }
}

module.exports = {
  CreateLeague,
  GetLeague,
  GetLeagues,
  UpdateLeague,
  DropLeague
}
