const Model = require('../models')
class ControllerSubject {

  static getData() {
    return new Promise (function(resolve, reject) {
      Model.Subject.findAll()
      .then(function(data){
        resolve(data)
      })
      .catch(function(err){
        reject(err)
      })
    })
  }

  static inputData (name) {
    let obj = {
      subject_name: name,
      createdAt : new Date (),
      updatedAt: new Date()
    }
    return new Promise (function(resolve, reject){
      Model.Subject.create(obj)
        .then(function(data){
          resolve(data)
        })
        .catch(function(err) {
          reject(err)
        })
    })
    
  }

  static finData (idSubject) {
    return new Promise (function(resolve, reject) {
      Model.Subject.findByPk(idSubject)
    .then(function(data) {
      resolve(data)
    })
    .catch(function(err) {
      reject(err)
    })
    })
    
  }

  static updateData (idSubject, SubjectName) {
    let change = {
      subject_name: SubjectName
    }
    return new Promise(function(resolve, reject) {
      Model.Subject.update(
        change,{ where: {id: idSubject}}
        )
      .then(function(row) {
        resolve(row)
      })
      .catch(err => {
        reject(err)
      })
    })
    
  }

  static deleteData (idSubject) {
    return new Promise(function(resolve, reject){
      Model.Subject.destroy({where: {id:idSubject}})
      .then(function(row) {
        resolve(row)
      })
      .catch(err =>{
        reject(err)
      })
    })
    
  }
}

module.exports = ControllerSubject;