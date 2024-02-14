'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      // events 
      MeetGreet.belongsTo(Event, { 
        foreignKey: 'event_id', 
        as: 'events' 
      })
    }
  }
  
 MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meet_start_tine: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_Greets',
    timestamps: false
  });
  return MeetGreet;
};
