const Model = require('../models')

class TeacherController {

  static findAll(req, res) {
    Model.Teacher.findAll()

      .then(function(teachers) {
        res.render('teachers', {data: teachers})
      })

      .catch(function(err) {
        res.send(err)
      })
  }

  static addTeacherForm(req, res) {
    res.render('add-teacher')
  }

  static create(req, res) {
    let obj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }

    Model.Teacher.create(obj)

      .then(function(teacher) {
        res.redirect('/teachers')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static updateTeacherForm(req, res) {
    Model.Teacher.findOne({where: {id: req.params.id}})

      .then(function(teacher) {
        res.render('edit-teacher', {data: teacher})
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

    Model.Teacher.update(obj, {where: {id: req.params.id}})

      .then(function(teacher) {
        res.redirect('/teachers')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static delete(req, res) {

    Model.Teacher.destroy({where: {id: req.params.id}})

      .then(function(teacher) {
        res.redirect('/teachers')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

}

module.exports = TeacherController