'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.belongsToMany(models.Driver, {
        through: models.DriverTeam,
        foreignKey: 'team_id'
      })
    }
  }
  Team.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.TEXT,
      chassis: DataTypes.TEXT,
      color: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Team',
      tableName: 'teams'
    }
  )
  return Team
}
