const Model = require('../models')

class ControllerStudent {

  static getData() {
    return new Promise (function(resolve, reject) {
      Model.Student.findAll()
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
    return new Promise (function(resolve, reject) {
      Model.Student.create(obj)
      .then(function(data){
        resolve(data)
      })
      .catch(function(err) {
        reject(data)
      })
    })
    
  }

  static finData (idStudent) {
    return new Promise (function(resolve, reject) {
      Model.Student.findByPk(idStudent)
    .then(function(data) {
      resolve(data)
    })
    .catch(function(err) {
      reject(err)
    })
    })
    
  }

  static updateData (idStudent, firstname, lastname, email) {
    let change = {
      first_name: firstname,
      last_name : lastname,
      email: email
    }
    return new Promise(function(resolve, reject) {
      Model.Student.update(
        change,{ where: {id: idStudent}}
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
      Model.Student.destroy({where: {id:idTeacher}})
      .then(function(row) {
        resolve(row)
      })
      .catch(err =>{
        reject(err)
      })
    })
    
  }
}

module.exports = ControllerStudent;