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

  static create(obj) {
    return new Promise((res, rej ) => {
      Teacher.create(obj)
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
      Teacher.findOne({where: {email}})
        .then(data => {
           if(!data) {
             rej(`Email not found`)
           } else {
              if(data.email !== email){
                rej(`Email didn't match`)
              } else {
                return Teacher.update({first_name, last_name}, {where: {id}})
              }
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
      Teacher.destroy({where: {id}})
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