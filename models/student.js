'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Must be email`
        },
        isUnique: function(value){
          return Student.findOne({where:{
            email:value
          }})
            .then(data => {
              if(data){
                if(data.dataValues.id != this.id) {
                  throw new Error(`Email has been used`)
                }
              }
            })
            .catch(err =>{
              throw new Error(err)
            })
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};