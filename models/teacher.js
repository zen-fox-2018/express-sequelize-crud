'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teachers', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail : true,
        isUnique: function(theEmail, next) {
          let self = this;
          Teacher
          .findOne({
            where: {
              email: theEmail
            }
          })
          .then(function(teacher) {
            if (teacher && self.id != teacher.id) {
              return next("Email has been used");
            }
            return next();
          })
          .catch(function(err) {
            return next(err)
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