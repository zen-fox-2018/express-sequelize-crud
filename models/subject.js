'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    subject_name: {
      type: DataTypes.STRING,
      validate : {
        len: {
          args: [3, 20],
          msg: "Subject name must between 3 - 20 words"
        }, 
        isUnique: function(value, next) {
          let self = this
          Subject.find({
            where:{subject_name: value} 
          })
         .then(data=> {
           
           if(data && data.id != self.id) throw next(`Subject already added`)
           next()
         })
         .catch(err => {
           next(err)
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