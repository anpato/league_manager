'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class LeagueOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LeagueOwner.init(
    {
      organizerId: {
        type: DataTypes.UUID,
        field: 'organizer_id',
        references: {
          model: 'organizers',
          key: 'id'
        },
        onDelete: 'CASCADE'
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
    },
    {
      sequelize,
      modelName: 'LeagueOwner',
      tableName: 'league_owners'
    }
  )
  return LeagueOwner
}
