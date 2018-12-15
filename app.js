const express = require('express')
const app = express()
const port = 3000

const StudentCon = require('./controllers/StudentCon')
const TeacherCon = require('./controllers/TeacherCon')
const SubjectCon = require('./controllers/SubjectCon')
const View = require('./views/View')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/' , (req, res) => {
  res.render('home.ejs', {msg:''})
})

app.get('/student', (req, res) => {
  StudentCon.getStudentsData()
    .then(data => {
      //here
      res.render('data.ejs', {title: 'Students Data', data, route:'student', msg:''})
    })
    .catch(err => {
      View.display(err)
      res.render('home.ejs', {msg: err.message})
    })
})

app.get('/student/add' , (req, res) => {
  res.render('form.ejs', {title: 'Student', route: '/student/', funct: 'add'})
})

app.post('/student/add' , (req, res) => {
  let obj = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  StudentCon.create(obj)
    .then(data => {
      res.redirect('/student')
    })
    .catch(err => {
        View.display(err)
        res.render("home.ejs", {msg: err})
    })
})

app.get('/student/edit/:id' , (req, res) => {
  // action="/student/edit/:id" ==> kalo satuin formnya gmn dapet idny
  // ,  {title: 'Student', route: '/student/', funct: 'edit/id'}
  res.render('editStu.ejs')
})

app.post('/student/edit/:id', (req, res) => {
  let obj = {
    id: req.params.id,
    first_name : req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  StudentCon.update(obj) 
    .then(data => {
      res.redirect('/student')
    })
    .catch(err => {
      View.display(err)
      res.render('home.ejs', {msg: err})
    })
})

app.get('/student/delete/:id' , (req, res) => {
  StudentCon.delete(req.params.id) 
    .then(success => {
      res.redirect('/student')
    })
    .catch(err => {
      View.display(err)
      res.render('home.ejs', {msg: err})
    })  
})

app.get('/teacher', (req, res) => {
  // <% for(let i in data[0].dataValues) { %>
  //   <th><%= i %></th>
  // <% } %> ==> keluar smua datavalues dkk
  TeacherCon.getTeachersData()
    .then(data => {
      res.render('data.ejs', {title: 'Teachers Data', data, route:'teacher', msg:''})
    })
    .catch(err => {
      View.display(err)
      res.render('error.ejs')
    })
})

app.get('/teacher/add', (req, res) => {
  res.render('form.ejs', {title: 'Teacher', route: '/teacher/', funct: 'add'})
})

app.post('/teacher/add', (req, res) => {
  let obj = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  TeacherCon.create(obj)
    .then(data => {
      res.redirect('/teacher')
    })
    .catch(err => {
        View.display(err)
        res.render("home.ejs", {msg: err})
    })
})

app.get('/teacher/edit/:id' , (req, res) => {
  // action="/student/edit/:id" ==> kalo satuin formnya gmn dapet idny
  // ,  {title: 'Student', route: '/student/', funct: 'edit/id'}
  res.render('editTea.ejs')
})

app.post('/teacher/edit/:id', (req, res) => {
  let obj = {
    id: req.params.id,
    first_name : req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }
  TeacherCon.update(obj) 
    .then(data => {
      res.redirect('/teacher')
    })
    .catch(err => {
      View.display(err)
      //
      res.render('home.ejs', {msg: err})
    })
})

app.get('/teacher/delete/:id', (req, res ) => {
  TeacherCon.delete(req.params.id) 
    .then(success => {
      res.redirect('/teacher')
    })
    .catch(err => {
      View.display(err)
      res.render('home.ejs', {msg: err})
    })  
})

app.get('/subject', (req, res ) => {
  SubjectCon.getSubData()
    .then(data => {
      res.render('subject.ejs', {data})
    })
    .catch(err => {
      res.render('home.ejs' , {msg:err})
    })
})

app.get('/subject/add', (req, res) => {
  res.render('formSub.ejs')
})

app.post('/subject/add', (req, res) => {
  let obj = {
    subject_name: req.body.subject_name
  }
  SubjectCon.create(obj)
    .then(data => {
      res.redirect('/subject')
    })
    .catch(err => {
      res.render('home.ejs', {msg: err})
    })
})

app.get('/subject/edit/:id' , (req, res ) => {
  res.render('editSub.ejs')
})

app.post('/subject/edit/:id' , (req, res ) => {
  let obj = {
    id: req.params.id,
    subject_name: req.body.subject_name
  }
  SubjectCon.update(obj)
    .then(data => {
      res.redirect('/subject')
    })
    .catch(err => {
      res.render('home.ejs' , {msg: err})
    })
})

app.get('/subject/delete/:id' , (req, res) => {
  SubjectCon.delete(req.params.id) 
    .then(data => {
      res.redirect('/subject')
    })
    .catch(err => {
      res.render('home.ejs' , {msg:err})
    })
})

app.get('/*', (req, res) => {
  res.render('home.ejs', {msg: `Sorry we didn't have the page you are looking for!`})
})

app.listen(port, () => {
  console.log(`App listening to port ${port}`)
})