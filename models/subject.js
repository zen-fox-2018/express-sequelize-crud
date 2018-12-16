'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subjects', {
    subject_name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};