'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    isLogin: DataTypes.INTEGER,
    password: DataTypes.STRING

  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  Teacher.findWhere = function(input) {
    return new Promise((resolve,reject)=> {
      Teacher.findAll({
                        where : {
                                  email: input.email,
                                  password : input.password
                                  }
                        })
    })
    .then(data =>{
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  }
  return Teacher;
};