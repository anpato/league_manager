'use strict'
const { Model } = require('sequelize')
const { PasswordHandler } = require('../../helpers')
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Driver.belongsToMany(models.League, {
        through: models.Division,
        as: 'drivers',
        foreignKey: 'driver_id'
      })
      Driver.belongsToMany(models.Team, {
        through:models.DriverTeam,
        foreignKey:'driver_id'
      })
    }
  }
  Driver.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        field: 'password_digest',
        allowNull: false
      },
      platformId: {
        type: DataTypes.STRING,
        field: 'platform_id',
        unique: true
      },
      platform: {
        type: DataTypes.ENUM(['Pc', 'Xbox', 'Ps']),
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Driver',
      tableName: 'drivers'
    }
  )
  Driver.beforeCreate((driver) => {
    driver.passwordDigest = await PasswordHandler.genPassword(driver.passwordDigest)
  })
  return Driver
}
