'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Season.belongsTo(models.League, {
        foreignKey: 'league_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Season.init(
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
      season: DataTypes.STRING,
      leagueId: {
        type: DataTypes.UUID,
        field: 'league_id',
        references: {
          model: 'leagues',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'Season',
      tableName: 'seasons'
    }
  )
  return Season
}
