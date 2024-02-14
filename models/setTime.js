'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({Band,Event,Stage }) {
// band
  SetTime.belongsTo(Band, { 
  foreignKey: 'band_id', 
  as: 'band' 
})
//  event
SetTime.belongsTo(Event,{
  foreignKey:'event_id',
  as:'event'
});
// stage
SetTime.belongsTo(Stage, {
   foreignKey: 'stage_id', 
   as: 'set_times', 
  })
    }
  }
  SetTime.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_Times',
    timestamps: false,
  });
  return SetTime;
};