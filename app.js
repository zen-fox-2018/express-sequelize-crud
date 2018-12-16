const express = require('express');
const Model = require('./models')
var app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
  res.render('home.ejs')
})

//Student
app.get('/students', function(req, res) {
  Model.Student.findAll()
    .then(item =>{
      res.render('students.ejs', {
        title : 'Student List',
        data : item
      })
    })
    .catch(err =>{
      res.render('students.ejs', {
        title : 'Student List',
        data : err
      })
    })
})

app.get('/students/add', function(req, res) {
  res.render('addstudent.ejs')
})

app.post('/students/add', function(req, res) {
  //add student ke db
  // console.log(req.body);
  Model.Student.create(req.body)
  .then(data => {
    console.log(req.body,'saved');
    res.redirect('/students');
  })
  .catch(err =>{
    console.log(err);
  })

})

app.get('/students/edit/:id', function(req, res) {
  // res.render('editstudent.ejs')
  let value = req.params.id
  console.log(req.params.id);
  Model.Student.findOne({
    where : {
      id : req.params.id
    }
  })
  .then(item =>{
    console.log(item);
    if(item != null){
      res.render('editstudent.ejs', {
      title : 'Edit Student data',
      data : item.dataValues
      })

    }
  })
  .catch(err =>{
    res.render('editstudent.ejs', {
      title : 'Student id',
      data : 'error'
    })
  })
})

app.post('/students/edit/:id', function(req, res) {
  Model.Student.update(
    req.body,
    { where : {id : req.params.id}}
  )
  .then((data) =>{
    console.log('success');
    res.redirect('/students')
  })
  .catch(err =>{
    console.log(err);
  })
})

app.get('/students/delete/:id', function(req, res) {
  Model.Student.destroy(
    { where : {id : req.params.id}}
  )
  .then(() =>{
    res.redirect('/students')
  })
  .catch(err =>{
    console.log(err);
  })
})


//teacher
app.get('/teachers', function(req, res) {
  Model.Teacher.findAll()
    .then(item =>{
      res.render('teachers.ejs', {
        title : 'Teacher List',
        data : item
      })
    })
    .catch(err =>{
      res.render('teachers.ejs', {
        title : 'Teacher List',
        data : err
      })
    })
})

app.get('/teachers/add', function(req, res) {
  res.render('addteacher.ejs')
})

app.post('/teachers/add', function(req, res) {
  //add teacher ke db
  // console.log(req.body);
  Model.Teacher.create(req.body)
  .then(data => {
    console.log(req.body,'saved');
    res.redirect('/teachers');
  })
  .catch(err =>{
    console.log(err);
  })

})

app.get('/teachers/edit/:id', function(req, res) {
  // res.render('editteacher.ejs')
  let value = req.params.id
  console.log(req.params.id);
  Model.Teacher.findOne({
    where : {
      id : req.params.id
    }
  })
  .then(item =>{
    console.log(item);
    if(item != null){
      res.render('editteacher.ejs', {
      title : 'Edit Teacher data',
      data : item.dataValues
      })

    }
  })
  .catch(err =>{
    res.render('editteacher.ejs', {
      title : 'Teacher id',
      data : 'error'
    })
  })
})

app.post('/teachers/edit/:id', function(req, res) {
  Model.Teacher.update(
    req.body,
    { where : {id : req.params.id}}
  )
  .then((data) =>{
    console.log('success');
    res.redirect('/teachers')
  })
  .catch(err =>{
    console.log(err);
  })
})

app.get('/teachers/delete/:id', function(req, res) {
  Model.Teacher.destroy(
    { where : {id : req.params.id}}
  )
  .then(() =>{
    res.redirect('/teachers')
  })
  .catch(err =>{
    console.log(err);
  })
})

//subject-Name
app.get('/subjects', function(req, res) {
  Model.Subject.findAll()
    .then(item =>{
      res.render('subjects.ejs', {
        title : 'Subject List',
        data : item
      })
    })
    .catch(err =>{
      res.render('subjects.ejs', {
        title : 'Subject List',
        data : err
      })
    })
})

app.get('/subjects/add', function(req, res) {
  res.render('addsubject.ejs')
})

app.post('/subjects/add', function(req, res) {
  //add subject ke db
  // console.log(req.body);
  Model.Subject.create(req.body)
  .then(data => {
    console.log(req.body,'saved');
    res.redirect('/subjects');
  })
  .catch(err =>{
    console.log(err);
  })

})

app.get('/subjects/edit/:id', function(req, res) {
  // res.render('editsubject.ejs')
  let value = req.params.id
  console.log(req.params.id);
  Model.Subject.findOne({
    where : {
      id : req.params.id
    }
  })
  .then(item =>{
    console.log(item);
    if(item != null){
      res.render('editsubject.ejs', {
      title : 'Edit Subject Data',
      data : item.dataValues
      })

    }
  })
  .catch(err =>{
    res.render('editsubject.ejs', {
      title : 'Subject id',
      data : 'error'
    })
  })
})

app.post('/subjects/edit/:id', function(req, res) {
  Model.Subject.update(
    req.body,
    { where : {id : req.params.id}}
  )
  .then((data) =>{
    console.log('success');
    res.redirect('/subjects')
  })
  .catch(err =>{
    console.log(err);
  })
})

app.get('/subjects/delete/:id', function(req, res) {
  Model.Subject.destroy(
    { where : {id : req.params.id}}
  )
  .then(() =>{
    res.redirect('/subjects')
  })
  .catch(err =>{
    console.log(err);
  })
})

app.listen(3000, function() {
  console.log('server is listening to port 3000');
})
