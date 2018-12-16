'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true,
        isUnique(value, next) {
          Student.findOne({
            where : {
              email:value
            }
          })

          .then((student) => {
            // console.log(this.id);
            if (student && this.id !== student.id) {
              return next({msg:`Email already used!`})
            }
              return next()
          })

          .catch((err) => {
            return next (err)
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