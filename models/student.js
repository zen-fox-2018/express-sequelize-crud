'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail : {
          args : true,
          msg : 'Email is not valid'
        },
        isUnique : function(email){
          return Student.findOne({
            where : {
              email : email
            }
          })
          .then((data)=>{
            if (data != null && data.dataValues.email == email)
            throw new Error('email already registered');
          })
          .catch(err =>{
            // console.log(err);
            throw err
          })
        }
      }
    }
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
