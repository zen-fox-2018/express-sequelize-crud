const Model = require('./models')
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.listen(3000);

app.get('/students',function(req, res) {
   Model.Students
   .findAll()
   .then(students => {
       res.render('students', {data: students})
   })
   .catch(err => {
       console.log(err)
   })
})
app.get('/student/add', function(req, res) {
    res.render('addStudent')  
})
app.post('/student/add', function(req, res) {
    let newStudent = req.body;
    Model.Students
    .create({
        first_name: newStudent["First Name"],
        last_name: newStudent["Last Name"],
        email: newStudent["Email"],
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(theData => {
        res.redirect('/students')
    })
    .catch(err => {
        res.status(400).send(err)
    })
})
app.get('/student/edit/:id', function(req, res) {
    let theId = req.params.id
    Model.Students.findOne({where: {id : theId}})
    .then((theData) => {
        res.render('editStudentData', {data: theData})
    })
    .catch((err) => {
        res.status(400).send(err)
    })
})
app.post('/student/edit/:id', function(req, res) {
    let theId = req.params.id
    let newData = req.body
    Model.Students.update({
        first_name: newData["First Name"],
        last_name: newData["Last Name"],
        email: newData["Email"],
        updatedAt: new Date()
    }, {where: {
        id : theId
    }})
    .then(() => {
        res.redirect('/students')
    })
    .catch((err) => {
        res.send(err)
    })
})
app.get('/student/delete/:id', function(req, res) {
    let theId = req.params.id
    Model.Students
    .destroy({where: {id : theId}})
    .then(() => {
        res.redirect('/students')
    })
    .catch((err) => {
        res.send(err)
    })
})

//TEACHER
app.get('/teachers', function(req, res) {
    Model.Teachers
    .findAll()
    .then(teachers => {
        res.render('teachers',{data: teachers});
    })
    .catch(err => {
        res.send(err)
    })

})
app.get('/teacher/add', function(req, res) {
    res.render('addTeacher')
})

app.post('/teacher/add', function(req, res) {
    let newTeacher = req.body
    Model.Teachers
    .create({
        first_name: newTeacher["First Name"],
        last_name: newTeacher["Last Name"],
        email: newTeacher["Email"],
        createdAt: new Date(),
        updatedAt: new Date()})
    .then(theData => {
        res.redirect('/teachers')
    })
    .catch(err => {
        res.send(err)
    })
})
app.get('/teacher/delete/:id', function(req, res) {
    let theId = req.params.id
    Model.Teachers
    .destroy({where: {id : theId}})
    .then(() => {
        res.redirect('/teachers')
    })
    .catch((err) => {
        res.send(err)
    })
})
app.get('/teacher/edit/:id', function(req, res) {
    let theId = req.params.id
    Model.Teachers.findOne({where: {id : theId}})
    .then((theData) => {
        res.render('editTeacherData', {data: theData})
    })
    .catch((err) => {
        res.status(400).send(err)
    })
})
app.post('/teacher/edit/:id', function(req, res) {
    let theId = req.params.id
    let newData = req.body
    Model.Teachers.update({
        first_name: newData["First Name"],
        last_name: newData["Last Name"],
        email: newData["Email"],
        updatedAt: new Date()
    }, {where: {
        id : theId
    }})
    .then(() => {
        res.redirect('/teachers')
    })
    .catch((err) => {
        res.send(err)
    })
})

//SUBJECT
app.get('/subjects', function(req, res) {
    Model.Subjects.findAll()
    .then(theData => {
        res.render('subjects', {data: theData})
    })
    .catch(err => {
        res.send(err)
    })
})
app.get('/subject/add', function(req, res) {
    res.render('addSubject')
})
app.post('/subject/add', function(req, res) {
    let newData = req.body
    Model.Subjects.create({
        subject_name : newData["Subject Name"]
    })
    .then(() => {
        res.redirect('/subjects')
    })
    .catch((err) => {
        res.send(erre)
    })
})
app.get('/subject/delete/:id', function(req, res) {
    let theId = req.params.id
    Model.Subjects
    .destroy({where: {id : theId}})
    .then(() => {
        res.redirect('/subjects')
    })
    .catch((err) => {
        res.send(err)
    })
})
app.get('/subject/edit/:id', function(req, res) {
    let theId = req.params.id;
    Model.Subjects
    .findOne({where: {id: theId}})
    .then((theData) => {
        res.render('editSubject', {data: theData})
    })
    .catch((err) => {
        res.send(err)
    })

})
app.post('/subject/edit/:id', function(req, res) {
    let theId = req.params.id
    let newData = req.body
    Model.Subjects
    .update({
        subject_name: newData["Subject Name"],
        updatedAt: new Date()
    }, {where: {id: theId}})
    .then(() => {
        res.redirect('/subjects')
    })
    .catch((err) => {
        res.send(err)
    })
})