const Model = require('../models')

class SubjectController {

  static findAll(req, res) {
    Model.Subject.findAll()

      .then(function(subjects) {
        res.render('subjects', {data: subjects})
      })

      .catch(function(err) {
        res.send(err)
      })
  }

  static addSubjectForm(req, res) {
    res.render('add-subject')
  }

  static create(req, res) {
    let obj = {
      subject_name: req.body.subject_name,
    }

    Model.Subject.create(obj)

      .then(function(subject) {
        res.redirect('/subjects')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static updateSubjectForm(req, res) {
    Model.Subject.findOne({where: {id: req.params.id}})

      .then(function(subject) {
        res.render('edit-subject', {data: subject})
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static update(req, res) {

    let obj = {
      subject_name: req.body.subject_name
    }

    Model.Subject.update(obj, {where: {id: req.params.id}})

      .then(function(subject) {
        res.redirect('/subjects')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

  static delete(req, res) {

    Model.Subject.destroy({where: {id: req.params.id}})

      .then(function(subject) {
        res.redirect('/subjects')
      })

      .catch(function(err) {
        res.send(err.message)
      })
  }

}

module.exports = SubjectController