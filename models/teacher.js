'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
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
          return Teacher.findOne({where:{
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
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};