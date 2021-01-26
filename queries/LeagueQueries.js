const { League, LeagueOwner, Season, Driver } = require('../db/models')

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
    return next(error)
  }
}

const GetLeague = async (req, res, next) => {
  try {
    const league = await League.findByPk(req.params.league_id, {
      include: [{ model: Season }, { model: Driver, as: 'drivers' }]
    })
    res.send(league)
  } catch (error) {
    return next(error)
  }
}

// const

module.exports = {
  CreateLeague,
  GetLeague
}
