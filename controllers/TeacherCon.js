const Teacher = require('../models').Teacher
// const View = require('../views/View')

class TeacherController {
  static getTeachersData() {
    return new Promise((res, rej) => {
      Teacher.findAll()
        .then(data => {
          res(data)
        })
        .catch(err => {
          rej(err)
        })
    })
  }
} 
module.exports = TeacherController