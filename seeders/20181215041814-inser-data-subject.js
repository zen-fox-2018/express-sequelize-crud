'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let subjects = [
      {
        subject_name: 'Kimia',
        createdAt: new Date(),
        updatedAt: new Date()
      },       {
        subject_name: 'Ekonomi',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Subjects', subjects, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subjects', null, {});
  }
};
