'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
              type : DataTypes.STRING,
              validate:  { checkUnique : function (value) {
                        return Student.findOne( { where: {email:value}})
                          .then ((data) => {
                            if(data) {
                            throw new Error ("email has been used")
                            }
                          })
                          .catch((err)=>{
                            throw new Error(err)
                          })
                        
                      },
              isEmail: {
                        args: true,
                        msg: "invalid email"
                        },
              contains: {
                        args: [".","@"],
                        msg: "invalid format"
                        }
                        
              }
    }
    
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};