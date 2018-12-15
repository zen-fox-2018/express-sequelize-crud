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
  res.render('home.ejs')
})

app.get('/student', (req, res) => {
  StudentCon.getStudentsData()
    .then(data => {
      res.render('data.ejs', {title: 'Students Data', data, route:'student'})
    })
    .catch(err => {
      View.display(err)
      res.render('error.ejs')
    })
})

app.get('/student/add' , (req, res) => {
  res.render('addStu.ejs')
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
      if(err.message == 'Validation error: Error: Email has been used') {
        res.send(`Email has been used!`)
      } else {
        View.display(err)
        res.render("error.ejs")
      }
    })
})

app.get('/student/edit/:id' , (req, res) => {
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
      res.render('error.ejs')
    })
})

app.get('/student/delete/:id' , (req, res) => {
  StudentCon.delete(req.params.id) 
    .then(success => {
      res.redirect('/student')
    })
    .catch(err => {
      View.display(err)
      res.render(err)
    })  
})

app.get('/teacher', (req, res) => {
  // <% for(let i in data[0].dataValues) { %>
  //   <th><%= i %></th>
  // <% } %> ==> keluar smua datavalues dkk

  TeacherCon.getTeachersData()
    .then(data => {
      res.render('data.ejs', {title: 'Teachers Data', data, route:'teacher'})
    })
    .catch(err => {
      View.display(err)
      res.render('error.ejs')
    })
})


app.get('/*', (req, res) => {
  res.render('home.ejs')
})

app.listen(port, () => {
  console.log(`App listening to port ${port}`)
})