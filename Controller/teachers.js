
const Model = require("../models");

class TaechersController {
    static getAllDataTeachers() {
        return new Promise((resolve, reject) => {
            Model.Teacher.findAll().then(teachers => {
                resolve(teachers)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static addTeacher(data) {
        return new Promise((resolve, reject) => {
            let newTeacher = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email
            }
            Model.Teacher.create(newTeacher).then(data =>{
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static deleteTeachers(id) {
        return new Promise ((resolve, reject) => {
            Model.Teacher.destroy({where:{id}}).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = TaechersController