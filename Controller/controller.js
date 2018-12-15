
const Model = require("../models");

class Controller {

    static getAllDataStudents() {
        return new Promise((resolve, reject) => {
            Model.Student.findAll().then(students => {
                resolve(students)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static addStudents(input) {
        return new Promise((resolve, reject) => {
            let newStudent = {
                first_name: input.firstName,
                last_name: input.lastName,
                email: input.email
            }
            Model.Student.create(newStudent).then(newData => {
                resolve(newData)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static updateStudents(data) {
        return new Promise((resolve, reject) => {
            Model.Student.update(data, { where:{ id: data.id } }).then(updated => {
                resolve(updated)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static deleteStudents(id) {
        return new Promise ((resolve, reject) => {
            Model.Student.destroy({where:{id}}).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = Controller