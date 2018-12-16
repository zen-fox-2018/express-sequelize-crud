'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Students', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail : true,
        isUnique: function(theEmail, next) {
          let self = this;
          Student
          .findOne({
            where: {
              email: theEmail
            }
          })
          .then(function(student) {
            if (student && self.id != student.id) {
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
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};