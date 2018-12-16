'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: {type: DataTypes.STRING,
                   validate: {
                     isuniqe(value) {
                       return Subject.findAll({ where: {subject_name : value}})
                              .then(function(data) {
                                if(data.length > 0) {
                                  throw new Error ('Subject already Exists!')
                                }
                              })
                              .catch(function(err) {
                                throw err
                              })
                     }
                   }}
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
  };
  return Subject;
};