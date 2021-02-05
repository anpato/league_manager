const { Standings, Division } = require('../db/models')
const { errorMethods } = require('../middleware/ErrorHandlers')

const ViewStandings = async (req, res, next) => {
  try {
    const standings = await Standings.findAll({
      where: { seasonId: req.params.season_id },
      include: [Division]
    })
    if (!standings) {
      return next(errorMethods.custom(404, 'Invalid Id'))
    }
    res.send(standings)
  } catch (error) {
    next(errorMethods.default(error))
  }
}

const UpdateStandings = async (req, res, next) => {
  try {
    const standings = await Standings.update(
      { ...req.body },
      { where: { id: req.params.standings_id, returning: true } }
    )
    res.send(standings[0][1])
  } catch (error) {
    next(errorMethods.default(error))
  }
}

module.exports = {
  ViewStandings,
  UpdateStandings
}
