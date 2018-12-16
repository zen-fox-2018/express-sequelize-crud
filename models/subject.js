'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: {
      type:DataTypes.STRING,
      validate: 
                {
                 checkUnique: function (value) {
                   return Subject.findOne({where: {['subject_name']:value}})
                    .then((data) => {
                      if (data) {
                        if (data.dataValues.id !== this.id ) {
                          throw new Error("subject already exist")
                        }
                      }
                    })
                    .catch((err) => {
                        throw new Error(err)
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