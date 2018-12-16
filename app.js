const express = require('express')

const ControllerTeacher = require('./controllers/controllerTeacher.js')
const ControllerStudent = require('./controllers/controllerStudent.js')
const ControllerSubject = require('./controllers/controllerSubject.js')
const app = express()
app.set('view engine', 'ejs', 'css')
app.use(express.urlencoded({extended:false}))
app.use(express.static('views'))

app.get('/',function(req, res) {
  res.render('home.ejs')
})

//=========================TEACHER============================
app.get('/teacher',function(req, res) {
  ControllerTeacher.getData()
  .then(function(data){
    if(data.length == 0) {
      res.render('dataPerson.ejs', {user: data, route: 'teacher', no:'no data'})
    }else {
      res.render('dataPerson.ejs', {user: data, route: 'teacher', no:''})
    }
    
  })
  .catch(function(err) {
    console.log(err)
    res.render('dataPerson.ejs', {user: 'sorry for inconvenience'})
  }) 
})

app.get('/teacher/add',function(req, res) {
  res.render('addData.ejs', {route: 'teacher'})
  
})

app.post('/teacher/add',function(req, res) {
  let first = req.body.firstname
  let last = req.body.lastname
  let email = req.body.email
  ControllerTeacher.inputData(first, last, email)
    .then(function(data) {
      res.redirect('/')
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
  
})

app.get("/teacher/edit/:id" , function(req, res) {
  let id = req.params.id
  ControllerTeacher.finData(id)
    .then(function(data){
      res.render('editDataPerson.ejs', {user: data, route: 'teacher' })
    })
    .catch(function(err) {
      console.log(err)
      res.render('errorpage.ejs')
    }) 
})

app.post("/teacher/edit/Teacher", function(req, res) {
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let email = req.body.email
  console.log(firstname)
  let id = req.body.id
  ControllerTeacher.updateData(id, firstname, lastname, email)
    .then(function(data) {
      res.redirect('/')
    })
    .catch(function(err) {
      console.log(err)
      res.render('errorpage.ejs')
    })
  
})

app.get("/teacher/delete/:id" , function(req, res) {
  let id = req.params.id
  ControllerTeacher.deleteData(id)
    .then(function(row) {
      res.redirect('/')
    })
    .catch(function(err) {
      console.log(err)
      res.render('errorPage.ejs')
    })
  
})

//=========================STUDENT============================
app.get('/student',function(req, res) {
  ControllerStudent.getData()
    .then(function(data) {
      if(data.length == 0) {
        res.render('dataPerson.ejs', {user: data, no:'no data' ,route: 'student'} )
      }else {
        res.render('dataPerson.ejs', {user: data, no:'' ,route: 'student'} )
      }
      
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})

app.get('/student/add', function(req, res) {
  res.render('addData.ejs', {route : 'student'})
})


app.post('/student/add', function(req, res) {
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let email = req.body.email
  ControllerStudent.inputData(firstname,lastname,email)
  .then(function(data) {
    res.redirect('/')
  })
  .catch(function(err) {
    res.render('errorpage.ejs')
  })
})

app.get('/student/edit/:id', function(req, res) {
  let id = req.params.id
  ControllerStudent.finData(id)
    .then(function(data) {
      res.render('editDataPerson.ejs', {user:data, route: 'student'})
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})

app.post('/student/edit/:id', function(req, res) {
  let id = req.body.id
  let firstname = req.body.firstname
  let lastname = req.body.lastname
  let email = req.body.email
  ControllerStudent.updateData(id, firstname, lastname, email)
    .then (function(row) {
      res.redirect('/')
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})

app.get('/student/delete/:id', function(req, res) {
  let id = req.params.id
  ControllerStudent.deleteData(id)
    .then (function(){
      res.redirect('/')
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})
//=========================SUBJECT============================
app.get('/subject',function(req, res) {
  ControllerSubject.getData()
    .then(function(data) {
      if(data.length == 0) {
        res.render('subject.ejs', {user: data, route: 'Subject', no:'No Data'})
      }else {
        res.render('subject.ejs', {user: data, route: 'Subject', no:''})
      }  
    })
    .catch(function(err) {
      console.log(err)
      res.render('errorpage.ejs')
    })
})

app.get('/Subject/add', function(req, res) {
  res.render('addSubject.ejs')
})

app.post('/Subject/add', function(req, res) {
  let subjectName = req.body.subject
  ControllerSubject.inputData(subjectName)
    .then(function(row) {
      res.redirect('/')
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})

app.get('/Subject/edit/:id', function(req, res) {
  let idSubject = req.params.id
  ControllerSubject.finData(idSubject)
    .then(function(data) {
      res.render('editSubject.ejs', {user: data})
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})

app.post('/Subject/edit', function(req, res) {
  let idSubject = req.body.id
  let subject = req.body.subject
  ControllerSubject.updateData(idSubject, subject)
    .then(function(row) {
      res.redirect('/')
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})

app.get('/Subject/delete/:id', function(req, res) {
  let idSubject = req.params.id
  ControllerSubject.deleteData(idSubject)
    .then(function(row) {
      res.redirect('/')
    })
    .catch(function(err) {
      res.render('errorpage.ejs')
    })
})


app.listen(3000, function(){
  console.log('Port 3000 start')
})

