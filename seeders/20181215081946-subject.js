'use strict';

function createSubject(name){
  return {
    subject_name: name,
    createdAt: new Date(),
    updatedAt: new Date()
  }
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

    let arrSubject = []
    arrSubject.push(createSubject('Kimia'))
    arrSubject.push(createSubject('Ekonomi'))

   return queryInterface.bulkInsert('Subjects',arrSubject, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Subjects', null, {});
  }
};
