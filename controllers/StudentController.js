const Model = require('../models')

class StudentController {

  static findAll(req, res) {
    Model.Student.findAll()

      .then(function(students) {
        res.render('students', {data: students})
      })

      .catch(function(err) {
        res.send(err)
      })
  }

  static addStudentForm(req, res) {
    res.render('add-student')
  }

  static create(req, res) {
    let obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }

    Model.Student.create(obj)

      .then(function(student) {
        res.redirect('/students')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static updateStudentForm(req, res) {
    Model.Student.findOne({where: {id: req.params.id}})

      .then(function(student) {
        res.render('edit-student', {data: student})
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static update(req, res) {

    let obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }

    Model.Student.update(obj, {where: {id: req.params.id}})

      .then(function(student) {
        res.redirect('/students')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static delete(req, res) {

    Model.Student.destroy({where: {id: req.params.id}})

      .then(function(student) {
        res.redirect('/students')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

}

module.exports = StudentController