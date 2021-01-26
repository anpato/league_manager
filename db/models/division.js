'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Division extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
        }
      },
      driverId: {
        type: DataTypes.UUID,
        field: 'driver_id',
        references: {
          model: 'drivers',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'Division',
      tableName: 'divisions'
    }
  )
  return Division
}
