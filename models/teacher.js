'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: {
      type:DataTypes.STRING, 
      validate: {
        isAlpha: {
          args : true,
          msg: "First name only have letters"
        }, 
        len:{
          args: [1, 15],
          msg: "First name must between 1 - 15 words"
        }
      }
    },
    last_name: {
      type:DataTypes.STRING, 
      validate: { 
        isAlpha: {
          args : true,
          msg: "Last name only have letters"
        }, 
        len:{
          args: [1, 15],
          msg: "Last name must between 1 - 15 words"
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate: {
        is: {
          args: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i , 
          msg: "Email must be filled with email formats"
      }
    }
  }
 }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};