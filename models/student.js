'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name:DataTypes.STRING,              
    last_name: DataTypes.STRING, 
    email : {type : DataTypes.STRING, 
              validate : {
                    isEmail : { args: true,
                      msg: 'please use example@mail.com'},
                    isuniqe(value) {
                      return Student.findAll({where: {email : value}})
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
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};