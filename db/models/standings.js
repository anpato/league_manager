'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Standings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Standings.belongsTo(models.Season, { foreignKey: 'season_id' })
      Standings.belongsTo(models.Division, { foreignKey: 'division_id' })
    }
  }
  Standings.init(
    {
      driverStandings: {
        field: 'driver_standings',
        type: DataTypes.JSONB,
        get: function (value) {
          let stands = this.getDataValue(value)
          if (stands.length) {
            return JSON.parse(this.getDataValue(value))
          }
          return stands
        },
        set: function (value) {
          return this.setDataValue(JSON.stringify(value))
        }
      },
      constructorStandings: {
        field: 'constructor_standings',
        type: DataTypes.JSONB,
        get: function (value) {
          let stands = this.getDataValue(value)
          if (stands.length) {
            return JSON.parse(this.getDataValue(value))
          }
          return stands
        },
        set: function (value) {
          return this.setDataValue(JSON.stringify(value))
        }
      },
      seasonId: {
        type: DataTypes.UUID,
        field: 'season_id',
        references: {
          model: 'seasons',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Standings',
      tableName: 'standings'
    }
  )
  return Standings
}
