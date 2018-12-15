const Model = require('../models')

class Controller {
    static create() {
        Model.Teacher.create()
            .then(data => {

            })
            .catch(err => {

            })
    }

    static findOne() {
        Model.Teacher.findOne()
            .then(data => {
                
            })
    }

    static findAll() {

    }

    static update() {

    }

    static delete() {

    }
}

module.exports = Controller