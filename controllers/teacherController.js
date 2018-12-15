const Model = require('../models')

class Controller {
    static create(input) {
        let data = {
            first_name: input.first_name,
            last_name: input.last_name,
            email: input.email,
            cretedAt: new Date(),
            updatedAt: new Date()
        }
        return new Promise((resolve, reject) => {
            Model.Teacher.create(data)
            .then(data => {
                resolve(data.dataValues)
            }).catch(err => {
                reject(err)
            });
        })
    }

    static findOne(input) {
        return new Promise((resolve, reject) => {
            Model.Teacher.findOne({
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
            Model.Teacher.findAll()
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
            Model.Teacher.update({
                first_name : input.first_name,
                last_name: input.last_name,
                email: input.email
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
            Model.Teacher.destroy({
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