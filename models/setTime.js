'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    static associate({ models }) {
    
    }
  }
  Set_Time.init({
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
  return Set_Time;
};