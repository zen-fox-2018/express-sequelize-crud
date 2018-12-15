const Subject = require('../models').Subject

class SubjectController {
  static getSubData() {
    return new Promise((res, rej) => {
      Subject.findAll()
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
      Subject.create(obj) 
        .then(data => {
          res(data)
        })
        .catch(err => {
          rej(err)
        })
    })
  }

  static update(obj) {
    return new Promise ((res, rej ) => {
      Subject.update(obj, {where: {id: obj.id}})
        .then(data => {
          res(data)
        })
        .catch(err => {
          rej(err)
        })
    })
  }

  static delete(id){
    return new Promise((res, rej ) => {
      Subject.destroy({where: {id}})
        .then(data => {
          res(data)
        })
        .catch(err => {
          rej(err)
        })
    })
  }

}
module.exports = SubjectController