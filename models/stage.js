'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent }) {
      // events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      });
       // set times
       Stage.hasMany(Set_Time, {
        foreignKey: 'stage_id',
        as: 'set_times',
      })
    }
    }
  
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false,
  });
  return Stage;
};