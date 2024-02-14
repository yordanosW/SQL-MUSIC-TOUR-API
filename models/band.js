'use strict'; 
const {
     Model
     } = require('sequelize');
 module.exports = (sequelize, DataTypes) => { 
    class Band extends Model { 
    static associate({MeetGreet,setTime}) { 
        // meet and greets
        Band.hasMany(MeetGreet, {
             foreignKey: "bandId",
            as:"meet_greets" 
        });
        // set times for each meeting
        Band.hasMany(setTime,{
            as:'setTimes',
            foreignKey:'bandId'
        });
} } 
    
Band.init({ 
band_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    autoIncrement: true,
 }, 
 name: {
     type: DataTypes.STRING, 
     allowNull: false, 
    }, 
genre: {
     type: DataTypes.TEXT, 
     allowNull: false, 
    }, 
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false, 
    }, 
    end_time: { 
        type: DataTypes.DATE,
         allowNull: false 
        } }, {
     sequelize, 
     modelName: 'Band', 
     tableName: 'bands',
     timestamps: false, 
    }); 
    return Band; 
};
};