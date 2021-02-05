'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Division extends Model {
    static associate(models) {
      // define association here
      Division.hasMany(models.DriverTeam, { foreignKey: 'division_id' })
      Division.belongsTo(models.League, { foreignKey: 'league_id' })
      Division.hasMany(models.Standings, { foreignKey: 'division_id' })
    }
  }
  Division.init(
    {
      division: {
        type: DataTypes.STRING,
        allowNull: false
      },
      leagueId: {
        type: DataTypes.UUID,
        field: 'league_id',
        references: {
          model: 'leagues',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
      // driverId: {
      //   type: DataTypes.UUID,
      //   field: 'driver_id',
      //   references: {
      //     model: 'drivers',
      //     key: 'id'
      //   },
      //   onDelete: 'CASCADE'
      // }
    },
    {
      sequelize,
      modelName: 'Division',
      tableName: 'divisions'
      // tableName: 'divisions'
    }
  )
  return Division
}
