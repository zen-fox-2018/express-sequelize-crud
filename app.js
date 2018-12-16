'use strict'
const Model = require('./models')
const express = require('express')
const Teacher = Model.Teacher
const Student = Model.Student
const app = express()
const port = 3002

app.set('view engine', "ejs")
app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.render("home.ejs")
})

app.get('/teachers', (req, res) => {

    Teacher.findAll()
        .then((data) => {
            res.render('teacher.ejs', {data})
        })
        .catch((err) => {
            res.send(err)
        })
})

app.get('/teachers/add', (req, res) => {
    res.render('formTeacher.ejs')
})

app.post('/teachers/add', (req, res) => {
   
    Teacher.create(req.body)
        .then((data) => {
            res.redirect('/teachers')
        })
        .catch((err) => {
            res.send(err)
        })
})

app.get('/teachers/edit/:id', (req, res) => {
    req.params.id = req.params.id.slice(1)
    Teacher.findOne({where:{id:req.params.id}})
        .then((data)=> {
            res.render('formEditTeacher.ejs', {data})
        })
        .catch((err) => {
            res.send(err)
        })
})

app.post('/teachers/edit/:id', (req, res) => {
    let id = Number(req.params.id.slice(1))
    req.body.id = id
    Teacher.update(req.body,{where:{id}})
        .then((data) => {
            res.redirect('/teachers')
        })
        .catch((err) => {
            res.send(err)
        })
})

app.get('/teachers/delete/:id', (req, res) => {
    let id = Number(req.params.id.slice(1))
    Teacher.destroy({where:{id}})
        .then((data) => {
            res.redirect('/teachers')
        })
        .catch((err) => {
            res.send(err)
        })
})



app.get('/students/add', (req,res) => {
    res.render('formStudent.ejs')
})

app.post('/students/add', (req, res) => {
    
    Student.create(req.body)
        .then((data) => {
            res.redirect('/students')
        })
        .catch((err) => {
            res.send(err)
        })
})

app.get('/students', (req, res)=> {
    Student.findAll()
     .then((data) => {
         res.render('listStudents.ejs', {data})
     })
     .catch((err) => {
         res.send(err)
     })
})

app.get('/students/edit/:id', (req, res) => {
    req.params.id = req.params.id.slice(1)
    Student.findOne({where:{id:req.params.id}})
        .then((data)=> {
            res.render('formEditStudent.ejs', {data})
        })
        .catch((err) => {
            res.send(err)
        })
})

app.post('/students/edit/:id', (req, res) => {
    let id = Number(req.params.id.slice(1))
    req.body.id = id
    Student.update(req.body,{where:{id}})
        .then((data) => {
            res.redirect('/students')
        })
        .catch((err) => {
            res.send(err)
        })
})

app.get('/students/delete/:id', (req, res) => {
    let id = Number(req.params.id.slice(1))
    Student.destroy({where:{id}})
        .then((data) => {
            res.redirect('/students')
        })
        .catch((err) => {
            res.send(err)
        })
})


app.listen(port, () =>{
    console.log(`server listen on ${port}`)
})