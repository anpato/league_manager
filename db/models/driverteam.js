'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DriverTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DriverTeam.init(
    {
      driverNumber: {
        type: DataTypes.INTEGER,
        field: 'driver_number'
      },
      teamId: {
        type: DataTypes.UUID,
        field: 'team_id',
        references: {
          model: 'teams',
          key: 'id'
        }
      },
      driverId: {
        type: DataTypes.UUID,
        field: 'driver_id',
        references: {
          model: 'drivers',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'DriverTeam'
    }
  )
  return DriverTeam
}
