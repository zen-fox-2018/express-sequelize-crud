
const Model = require("../models");

class SubjectsController {

    static getDataSubjects() {
        return new Promise((resolve, reject) => {
            Model.Subject.findAll().then(subject => {
                resolve(subject)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static findByOne(input) {
        return new Promise((resolve, reject) => {
            Model.Subject.findOne({where:{id: input}}).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static addSubject(input) {
        return new Promise((resolve, reject) => {
            let newSubject = {
                subject_name: input.subject_name
            }
            Model.Subject.create(newSubject).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static updateSubjects(input, id) {
        return new Promise((resolve, reject) => {
            let updated = {
                subject_name: input.subject_name
            }

            Model.Subject.update(updated, {where:{id}}).then(updated => {
                resolve(updated)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static deleteSubject(id) {
        return new Promise ((resolve, reject) => {
            Model.Subject.destroy({
                where: {
                    id: id
                }
            }).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = SubjectsController