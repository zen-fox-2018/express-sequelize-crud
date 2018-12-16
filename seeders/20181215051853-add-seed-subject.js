'use strict';

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
      let objSubject = [{
        subject_name: "Kimia",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        subject_name: "Ekonmi",
        createdAt: new Date(),
        updatedAt: new Date()
      }]


   return queryInterface.bulkInsert('Subjects', objSubject, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('Subjects', null, {})
  }
};
