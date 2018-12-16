'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subjects', {
    subject_name: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(theName, next) {
          let self = this;
          Subject
          .findOne({
            where: {
              subject_name: theName
            }
          })
          .then(function(subject) {
            if (subject && self.id != subject.id) {
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
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};