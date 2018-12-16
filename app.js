const StudentController = require('./controllers/StudentController.js')
const TeacherController = require('./controllers/TeacherController.js')
const SubjectController = require('./controllers/SubjectController.js')

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('home')
})

// Students
app.get('/students', StudentController.findAll)
app.get('/students/add', StudentController.addStudentForm)
app.post('/students/add', StudentController.create)
app.get('/students/edit/:id', StudentController.updateStudentForm)
app.post('/students/edit/:id', StudentController.update)
app.get('/students/delete/:id', StudentController.delete)

// Teacher
app.get('/teachers', TeacherController.findAll)
app.get('/teachers/add', TeacherController.addTeacherForm)
app.post('/teachers/add', TeacherController.create)
app.get('/teachers/edit/:id', TeacherController.updateTeacherForm)
app.post('/teachers/edit/:id', TeacherController.update)
app.get('/teachers/delete/:id', TeacherController.delete)

// Subject
app.get('/subjects', SubjectController.findAll)
app.get('/subjects/add', SubjectController.addSubjectForm)
app.post('/subjects/add', SubjectController.create)
app.get('/subjects/edit/:id', SubjectController.updateSubjectForm)
app.post('/subjects/edit/:id', SubjectController.update)
app.get('/subjects/delete/:id', SubjectController.delete)


app.listen(3000, function() {
  console.log('Server running on port 3000');
})