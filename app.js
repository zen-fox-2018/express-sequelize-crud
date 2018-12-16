const express = require('express')
const app = express()
const Model = require('./models')
let port = 3000


app.set('view engine', 'ejs')

app.use(express.urlencoded({
    extended: false
}))

app.get( '/' , function(req, res) {
  res.send('Ini hogwarts school')
})

// ========================================

app.get( '/teachers', function(req, res) {
  Model.Teacher.findAll()
    .then( allTeachers => {
      let data = allTeachers.map(a => a.dataValues)
      res.render( 'data.ejs', { data, type: 'teachers' })
    })
    .catch( err => {
      res.send(err)
    })
})

app.post( '/teachers', function(req, res) {
  res.redirect(`/teachers/edit=${req.body.id}`)
})

app.get( '/teachers/add', function( req, res) {
  res.render('add.ejs', { type: 'teachers' })
})

app.post('/teachers/add' , (req, res) => {
  let obj = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  }
  Model.Teacher.create(obj)
  .then( created => {
    res.redirect('/teachers')
    })
    .catch( err => {
      res.send(err.message)
    })
})

app.get('/teachers/edit=:id', function(req, res) {
  Model.Teacher.findOne({ where: { id: req.params.id }})
    .then( teacherData => {
      res.render('editData.ejs', { data : teacherData, type : 'teachers' })
    })
    .catch( err => {
      res.send(err)
    })
})

app.post('/teachers/edit=:id', function(req, res) {
  if (req.body.update !== undefined){
    let obj = {
      id : req.body.update,
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email
    }
    Model.Teacher.update(obj, { where : { id : req.body.update}})
      .then( updated => {
        res.redirect('/teachers')
      })
      .catch( err => {
        res.send(err)
      })
  } else if (req.body.delete !== undefined) {
    Model.Teacher.destroy({where : { id : req.body.delete}})
      .then( deleted => {
        res.redirect('/teachers')
      })
      .catch( err => {
        res.send(err)
      })
  }
})

// =================================

app.get( '/students' , function(req, res) {
  Model.Student.findAll()
    .then( allStudents => {
      let data = allStudents.map( a => a.dataValues)
      res.render( 'data.ejs', { data, type : 'students' })
    })
    .catch( err => {
      res.send(err)
    })
})

app.post( '/students', function(req, res) {
  res.redirect(`/students/edit=${req.body.id}`)
})

app.get( '/students/add', function( req, res) {
  res.render('add.ejs', { type: 'students' })
})

app.post('/students/add' , (req, res) => {
  let obj = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email
  }
  Model.Student.create(obj)
  .then( created => {
    res.redirect('/students')
    })
    .catch( err => {
      res.send(err.message)
    })
})

app.get('/students/edit=:id', function(req, res) {
  Model.Student.findOne({ where: { id: req.params.id }})
    .then( studentData => {
      res.render('editData.ejs', { data : studentData, type : 'students' })
    })
    .catch( err => {
      res.send(err)
    })
})

app.post('/students/edit=:id', function(req, res) {
  if (req.body.update !== undefined){
    let obj = {
      id : req.body.update,
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email
    }
    Model.Student.update(obj, { where : { id : req.body.update}})
      .then( updated => {
        res.redirect('/students')
      })
      .catch( err => {
        res.status(400).send(err)
      })
  } else if (req.body.delete !== undefined) {
    Model.Student.destroy({where : { id : req.body.delete}})
      .then( deleted => {
        res.redirect('/students')
      })
      .catch( err => {
        res.status(400).send(err)
      })
  }
})

// =================================

app.get( '/subjects' , function(req, res) {
  Model.Subject.findAll()
    .then( allSubject => {
      let data = allSubject.map( a => a.dataValues)
      res.render( 'subjectData.ejs', { data })
    })
    .catch( err => {
      res.send(err)
    })
})

app.post( '/subjects', function(req, res) {
  res.redirect(`/subjects/edit=${req.body.id}`)
})

app.get( '/subjects/add', function( req, res) {
  res.render('addSubj.ejs')
})

app.post('/subjects/add' , (req, res) => {
  let obj = {
    name : req.body.name
  }
  Model.Student.create(obj)
  .then( created => {
    res.redirect('/subjects')
    })
    .catch( err => {
      res.send(err.message)
    })
})

app.get('/subjects/edit=:id', function(req, res) {
  Model.Subject.findOne({ where: { id: req.params.id }})
    .then( subjectData => {
      res.render('editSubj.ejs', { data : subjectData })
    })
    .catch( err => {
      res.send(err)
    })
})

app.post('/subjects/edit=:id', function(req, res) {
  if (req.body.update !== undefined){
    let obj = {
      id : req.body.update,
      name : req.body.name
    }
    Model.Subject.update(obj, { where : { id : req.body.update}})
      .then( updated => {
        res.redirect('/subjects')
      })
      .catch( err => {
        res.status(400).send(err)
      })
  } else if (req.body.delete !== undefined) {
    Model.Subject.destroy({where : { id : req.body.delete}})
      .then( deleted => {
        res.redirect('/subjects')
      })
      .catch( err => {
        res.send(err)
      })
  }
})



app.listen( port, function() {
  console.log(`Listening to port ${port}`)
})