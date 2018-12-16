const Model = require('../models')
class ControllerTeacher {

  static getData() {
    return new Promise (function(resolve, reject) {
      Model.Teacher.findAll()
      .then(function(data){
        resolve(data)
      })
      .catch(function(err){
        reject(err)
      })
    })
  }

  static inputData (firstname, lastname, email) {
    let obj = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      createdAt : new Date (),
      updatedAt: new Date()
    }
    return new Promise (function(resolve, reject){
      Model.Teacher.create(obj)
        .then(function(data){
          resolve(data)
        })
        .catch(function(err) {
          reject(err)
        })
    })
    
  }

  static finData (idTecher) {
    return new Promise (function(resolve, reject) {
      Model.Teacher.findByPk(idTecher)
    .then(function(data) {
      resolve(data)
    })
    .catch(function(err) {
      reject(err)
    })
    })
    
  }

  static updateData (idTeacher, firstname, lastname, email) {
    let change = {
      first_name: firstname,
      last_name : lastname,
      email: email
    }
    return new Promise(function(resolve, reject) {
      Model.Teacher.update(
        change,{ where: {id: idTeacher}}
        )
      .then(function(row) {
        resolve(row)
      })
      .catch(err => {
        reject(err)
      })
    })
    
  }

  static deleteData (idTeacher) {
    return new Promise(function(resolve, reject){
      Model.Teacher.destroy({where: {id:idTeacher}})
      .then(function(row) {
        resolve(row)
      })
      .catch(err =>{
        reject(err)
      })
    })
    
  }
}

module.exports = ControllerTeacher;