
const Model = require("../models");

class StudentController {

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

    static findByOne(input) {
        return new Promise ((resolve, reject) => {
            Model.Student.findOne({where: {
                id: input
            }}).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static updateStudents(data, id) {
        return new Promise((resolve, reject) => {
            let updateData = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            }
            Model.Student.update(updateData, { where:{id} }).then(updated => {
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

module.exports = StudentController