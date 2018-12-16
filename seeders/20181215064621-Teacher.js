'use strict';

let seedTeacher = [
                  // {first_name: "jack",
                  //  last_name: "ma",
                  //  email: "jack_ma@suzuran.com",
                  //  createdAt: new Date(),
                  //  updatedAt: new Date()
                  // },
                  // {
                  //   first_name: "unay",
                  //   last_name: "emery",
                  //   email: "unay_emery@suzuran.com",
                  //   createdAt: new Date(),
                  //   updatedAt: new Date()
                  // },
                  // {
                  //   first_name: "michael",
                  //   last_name: "schumacher",
                  //   email: "schumi1@suzuran.com",
                  //   createdAt: new Date(),
                  //   updatedAt: new Date()
                  // }
                  {
                    first_name: "Rukmana",
                    last_name: "fatmawati",
                     email: "fatma@suzuran.com",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    password: "123456",
                    isLogin:null
                  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
  
   return queryInterface.bulkInsert('Teachers', seedTeacher, {});
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Teachers', null, {});
    
  }
};
