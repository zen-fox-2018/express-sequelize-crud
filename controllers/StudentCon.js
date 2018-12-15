const Student = require('../models').Student 
const View = require('../views/View') 

class StudentController {
  static getStudentsData() {
    return new Promise((res, rej) => {
      Student.findAll()
        .then(data => {
          res(data)
        })
        .catch(err => {
          rej(err)
        })
    })
  }

  static create(obj) {
    return new Promise ((res, rej) => {
      Student.create(obj) 
        .then(data => {
          res(data)
        })
        .catch(err => {
          rej(err)
        })
    })
  }

  static update(obj) {
    let email = obj.email
    let first_name = obj.first_name
    let last_name = obj.last_name
    let id = obj.id

    return new Promise((res, rej) => {
      Student.findOne({where: {email}})
        .then(data => {
           if(!data) {
             res(`Email didn't match`)
           } else {
             return Student.update({first_name, last_name}, {where: {id}})
            }
          })
        .then(count => {
          res(count)
        })
        .catch(err => {
          rej(err)
        })

    })
  }

  static delete(id){
    return new Promise((res, rej ) => {
      Student.destroy({where: {id}})
        .then(data => {
          res(data)
        })
        .catch(err => {
          rej(err)
        })
    })
  }

}
module.exports = StudentController