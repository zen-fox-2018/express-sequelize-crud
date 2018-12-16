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
   let teachers = [{first_name : 'Bambang' ,
                    last_name: 'Suprapto',
                    email: 'bambangsuprapto@sekolah.id',
                    createdAt: new Date (),
                    updatedAt: new Date ()},
                  {first_name : 'Rukmana' ,
                   last_name: 'Fatmawati',
                   email: 'rukmanafatmawati@sekolah.id',
                   createdAt: new Date (),
                   updatedAt: new Date ()},
                  {first_name : 'Butet',
                   last_name: 'Naibohru',
                   email: 'butetnaibohru@sekolah.id',
                   createdAt: new Date (),
                   updatedAt: new Date ()},
                  {first_name : 'Yulius',
                   last_name: 'Prawiranegara',
                   email: 'yuliusprawiranegara@shool.id',
                   createdAt: new Date (),
                   updatedAt: new Date ()
                  }]

   return queryInterface.bulkInsert('Teachers', teachers, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Teachers', null, {});
  }
};
