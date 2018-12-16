'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email : {type : DataTypes.STRING, 
              validate : {
                isEmail : { args: true,
                  msg: 'please use example@mail.com'},
                    isuniqe(value) {
                      return Teacher.findAll({where: {email : value}})
                                    .then(function(data) {
                                      if(data.length !==0 ) {
                                        throw new Error ('Email already exists!')
                                      }
                                    })
                                    .catch(function(err) {
                                      throw err
                                    })
                      }       
              }}
    }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};