const express = require('express')
const app = express()
const Model = require('./models')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.listen(3000, function(){
    console.log('Server is listening on port 3000...')
})

app.get('/', function(req,res){
    res.render('home.ejs')
})

app.get('/student', function(req, res){
    // res.render('students.ejs')
    Model.Student.findAll()
    .then(data =>{
        res.render('students.ejs', {data})
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

app.get('/student/add', function(req, res){
    res.render('add-student.ejs')
})

app.post('/student/add', function(req,res){
    let objStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    Model.Student.create(objStudent)
    .then(data =>{
        console.log('data berhasil ditambahkan')
        res.redirect('/student')
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

app.get('/student/edit=:id', function(req, res){
    Model.Student.findOne(
        {where:
            {id:req.params.id}
        }
    )
    .then(data => {
        res.render('edit-student.ejs', {data})
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

app.post('/student/edit=:id', function(req,res){
    let objStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    Model.Student.update(objStudent, 
        {
            where:{id:req.params.id}
        }
    )
    .then (data =>{
        res.redirect('/student')
    })
    .catch(err =>{
        console.log(err);
        res.send(err)
    })
})

app.get('/student/delete=:id', function(req, res){
    Model.Student.destroy(
        {where:
            {id:req.params.id}
        }
    )
    .then(data =>{
        res.redirect('/student')
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

// ===============================================


app.get('/teacher', function(req, res){
    // res.render('students.ejs')
    Model.Teacher.findAll()
    .then(data =>{
        res.render('teachers.ejs', {data})
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

app.get('/teacher/add', function(req, res){
    res.render('add-teachers.ejs')
})

app.post('/teacher/add', function(req,res){
    let objTeacher = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    Model.Teacher.create(objTeacher)
    .then(data =>{
        console.log('data berhasil ditambahkan')
        res.redirect('/teacher')
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

app.get('/teacher/edit=:id', function(req, res){
    Model.Teacher.findOne(
        {where:
            {id:req.params.id}
        }
    )
    .then(data => {
        res.render('edit-teacher.ejs', {data})
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

app.post('/teacher/edit=:id', function(req,res){
    let objTeacher = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    Model.Teacher.update(objTeacher, 
        {
            where:{id:req.params.id}
        }
    )
    .then (data =>{
        res.redirect('/teacher')
    })
    .catch(err =>{
        console.log(err);
        res.send(err)
    })
})

app.get('/teacher/delete=:id', function(req, res){
    Model.Teacher.destroy(
        {where:
            {id:req.params.id}
        }
    )
    .then(data =>{
        res.redirect('/teacher')
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

// ===================================

app.get('/subject', function(req, res){
    // res.render('students.ejs')
    Model.Subject.findAll()
    .then(data =>{
        res.render('subjects.ejs', {data})
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

app.get('/subject/add', function(req, res){
    res.render('add-subject.ejs')
})

app.post('/subject/add', function(req,res){
    let objSubject = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    Model.Subject.create(objSubject)
    .then(data =>{
        console.log('data berhasil ditambahkan')
        res.redirect('/subject')
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })
})

app.get('/subject/edit=:id', function(req, res){
    Model.Subject.findOne(
        {where:
            {id:req.params.id}
        }
    )
    .then(data => {
        res.render('edit-subject.ejs', {data})
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

app.post('/subject/edit=:id', function(req,res){
    let objStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    Model.Subject.update(objSubject, 
        {
            where:{id:req.params.id}
        }
    )
    .then (data =>{
        res.redirect('/subject')
    })
    .catch(err =>{
        console.log(err);
        res.send(err)
    })
})

app.get('/subject/delete=:id', function(req, res){
    Model.Subject.destroy(
        {where:
            {id:req.params.id}
        }
    )
    .then(data =>{
        res.redirect('/subject')
    })
    .catch(err =>{
        console.log(err)
        res.send(err)
    })
})

