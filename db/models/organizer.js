'use strict'
const { Model } = require('sequelize')
const { PasswordHandler } = require('../../helpers')
module.exports = (sequelize, DataTypes) => {
  class Organizer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organizer.belongsToMany(models.League, {
        through: models.LeagueOwner,
        as: 'organizers',
        foreignKey: 'organizer_id'
      })
    }
  }
  Organizer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password_digest'
      }
    },
    {
      sequelize,
      modelName: 'Organizer',
      tableName: 'organizers'
    }
  )
  Organizer.beforeCreate(async (organizer) => {
    organizer.passwordDigest = await PasswordHandler.genPassword(
      organizer.passwordDigest
    )
  })
  return Organizer
}
