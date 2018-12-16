'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true,
        isUnique(value, next) {
          Teacher.findOne({
            where : {
              email:value
            }
          })

          .then((teacher) => {
            // console.log(this.id);
            if (teacher && this.id !== teacher.id) {
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
  Teacher.associate = function(models) {
    // associations can be defined here
  };
  return Teacher;
};