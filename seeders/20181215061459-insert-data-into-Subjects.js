'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    let data = [{
      subject_name : 'Kimia',
      createdAt: new Date(),
      updatedAt : new Date()
    },{
     subject_name : 'Ekonomi',
     createdAt: new Date(),
     updatedAt : new Date()
    }]

    return queryInterface.bulkInsert("Subjects", data, {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete("Teachers", null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
