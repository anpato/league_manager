'use strict'
const { Model } = require('sequelize')
const uuid = require('uuid').v4
module.exports = (sequelize, DataTypes) => {
  class League extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  League.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false
      },
      logo: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'League',
      tableName: 'leagues'
    }
  )
  League.beforeCreate((league) => (league.id = uuid()))
  return League
}
