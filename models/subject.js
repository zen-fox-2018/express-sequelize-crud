'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: {
      type: DataTypes.STRING,
      validate: {
        isUnique : function(value) {
          return Subject.findOne( { where: { subject_name : value }})
            .then( data => {
              if (data) {
                  throw 'Subject is already used'
              }
            })
            .catch( err => {
              throw err
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