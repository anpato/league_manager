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

module.exports = {
  ViewStandings
}
