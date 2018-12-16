'use strict';

function objTeacher(first_name, last_name, email){
  return {
    first_name: first_name, 
    last_name:last_name, 
    email:email,
    createdAt: new Date(),
    updatedAt: new Date()}
}

module.exports = {
  up: (queryInterface, Sequelize) => {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let arrTeacher =[]
    arrTeacher.push(objTeacher('Bambang', 'Suprapto', 'bambangsuprapto@sekolah.id' ))
    arrTeacher.push(objTeacher('Rukmana', 'Fatmawati', 'rukmanafatmawati@sekolah.id' ))
    arrTeacher.push(objTeacher('Butet', 'Naiborhu', 'butetnaiborhu@sekolah.id' ))
    arrTeacher.push(objTeacher('Yulius', 'Prawiranegara', 'yuliusprawiranegara@sekolah.id' ))

    return queryInterface.bulkInsert('Teachers', arrTeacher, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Teachers', null, {})
  }
};
