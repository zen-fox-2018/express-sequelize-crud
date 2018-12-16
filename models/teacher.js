'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
      type:DataTypes.STRING,
      validate: 
                {
                 checkUnique: function (value) {
                   return Teacher.findOne({where: {email:value}})
                    .then((data) => {
                      if (data) {
                        if (data.dataValues.id !== this.id || data.dataValues.email !== this.email) {
                          throw new Error("email has been use")
                        }
                      }
                    })
                    .catch((err) => {
                        throw new Error(err)
                    })
                 },
                 isEmail: {
                            args:true,
                            msg: "invalid email"
                          } ,
                 contains:{
                            args: ["@", "."],
                            msg:"invalid email format"
                          }
                }
    }
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};