'use strict';
const fs = require('fs');

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
    var data = fs.readFileSync('./teacherseed.csv', 'utf8');
    var dataSplitEnter = data.split('\n');
    var result = [];
    dataSplitEnter.forEach(item =>{
      var data = item.split(',');
      if (item.length>0) {
        var obj = {
          first_name : data[1],
          last_name : data[2],
          email : data[3],
          createdAt : new Date(),
          updatedAt : new Date()
        }
        result.push(obj)
      }
    })
    return queryInterface.bulkInsert('Teachers', result)


    //test pake asyng: didn't return a promise
    // fs.readFile('./teacherseed.csv', 'utf8', (err,data)=>{
    //   console.log(data);
    //   if (err) {
    //     console.log('err read file :',err);
    //   }
    //   else {
    //     var result = [];
    //     var dataSplitEnter = data.split('\n');
    //     dataSplitEnter.forEach(item =>{
    //       var data = item.split(',');
    //       if (item.length>0) {
    //         var obj = {
    //           first_name : data[1],
    //           last_name : data[2],
    //           email : data[3],
    //           createdAt : new Date(),
    //           updatedAt : new Date()
    //         }
    //         result.push(obj)
    //       }
    //     })
    //     console.log(data);
    //     return queryInterface.bulkInsert('Teachers',data);
    //   }
    // });
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


// function seedBulk() {
//   return new Promise(function(resolve, reject) {
//     fs.readFile('./teacherseed.csv', 'utf8', (err,data)=>{
//       if (err) {
//         reject('err read file :',err);
//       } else {
//         var result = [];
//         var dataSplitEnter = data.split('\n');
//         dataSplitEnter.forEach(item =>{
//           var data = item.split(',');
//           if (item.length>0) {
//             var obj = {
//               first_name : data[1],
//               last_name : data[2],
//               email : data[3],
//               createdAt : new Date(),
//               updatedAt : new Date()
//             }
//             result.push(obj)
//           }
//         })
//         resolve(result)
//       }
//     });
//   })
// }
// seedBulk()
// .then(data =>{
//   console.log('Teachers',data)
// })
// .catch(err =>{
//   console.log(err);
// })
