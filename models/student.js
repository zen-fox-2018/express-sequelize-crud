'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : `Input must be email format`
        },
        isUnique : function(value) {
          return Student.findOne( { where: { email : value }})
            .then( data => {
              if (data !== null && this.id != data.id) {
                  throw 'your email is already used'
              }
            })
            .catch( err => {
              throw err
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