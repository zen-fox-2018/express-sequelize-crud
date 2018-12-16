const Model = require('../models')

class Controller {
    static create(input) {
        let data = {
            subject_name: input.subject_name,
            cretedAt: new Date(),
            updatedAt: new Date()
        }
        return new Promise((resolve, reject) => {
            Model.Subject.create(data)
            .then(data => {
                resolve(data.dataValues)
            }).catch(err => {
                reject(err)
            });
        })
    }

    static findOne(input) {
        return new Promise((resolve, reject) => {
            Model.Subject.findOne({
                where: {
                    id: input
                }
            })
            .then(data => {
                resolve(data.dataValues)
            })
            .catch(err => {
                reject(err)
            })
        })
    }

    static findAll() {
        return new Promise((resolve, reject) => {
            Model.Subject.findAll()
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    static update(input, id) {
        return new Promise((resolve, reject) => {
            Model.Subject.update({
                subject_name : input.subject_name,
            }, {
                where: {
                    id: id
                }
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => [
                reject(err)
            ])
        })
    }

    static delete(input) {
        return new Promise((resolve, reject) => {
            Model.Subject.destroy({
                where: {
                    id: input
                }
            })
            .then(data => {
                resolve(data)
            })
            .catch(err => [
                reject(err)
            ])
        })
    }
}

module.exports = Controller