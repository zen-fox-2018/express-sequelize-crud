const express = require('express')
const Model = require('./models')

const Student = Model.Student
const Teacher = Model.Teacher
const Subject = Model.Subject
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('home')
})

// STUDENTS
app.get('/students', (req, res) => {
    // show all students data
    Student.findAll()
        .then(data => {
            let info = req.query.info
            res.render('students.ejs', {data: data, info: info})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/students/add', (req, res) => {
    // insert student data (form)
    res.render('studentsAdd.ejs')
})
app.post('/students/add', (req, res) => {
    let obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Student.create(obj)
        .then(() => {
            let info = 'Successfully add student'
            res.redirect(`/students?info=${info}`)
        })
        .catch(err => {
            res.send(err)  
        })
})

app.get('/students/edit/:id', (req, res) => {
    // update student data (form)
    let id = req.params.id
    res.render('studentsEdit.ejs', {id})
})
app.post('/students/edit/:id', (req, res) => {
    let id = req.params.id
    let obj = {
        id: id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Student.update(obj, {where: {id: id}})
        .then(() => {
            let info = 'Successfully edit student'
            res.redirect(`/students?info=${info}`)
        })
        .catch(err => {
            res.send(err)  
        })
})

app.get('/students/delete/:id', (req, res) => {
    let id = req.params.id
    Student.destroy({where: {id: id}})
        .then(data => {
            if (data) {
                let info = 'Successfully delete student'
                res.redirect(`/students?info=${info}`)
            }
        })
        .catch(err => {
            res.send(err)
        })
})

// TEACHERS
app.get('/teachers', (req, res) => {
    // show all teachers data
    Teacher.findAll()
        .then(data => {
            let info = req.query.info
            res.render('teachers.ejs', {data: data, info: info})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/teachers/add', (req, res) => {
    res.render('teachersAdd.ejs')
})
app.post('/teachers/add', (req, res) => {
    let obj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Teacher.create(obj)
        .then(() => {
            let info = 'Successfully add teacher'
            res.redirect(`/teachers?info=${info}`)
        })
        .catch(err => {
            res.send(err)  
        })
})

app.get('/teachers/edit/:id', (req, res) => {
    let id = req.params.id
    res.render('teachersEdit.ejs', {id})
})
app.post('/teachers/edit/:id', (req, res) => {
    let id = req.params.id
    let obj = {
        id: id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    Teacher.update(obj, {where: {id: id}})
        .then(() => {
            let info = 'Successfully edit teacher'
            res.redirect(`/teachers?info=${info}`)
        })
        .catch(err => {
            res.send(err)  
        })
})

app.get('/teachers/delete/:id', (req, res) => {
    let id = req.params.id
    Teacher.destroy({where: {id: id}})
        .then(data => {
            if (data) {
                let info = 'Successfully delete teacher'
                res.redirect(`/teachers?info=${info}`)
            }
        })
        .catch(err => {
            res.send(err)
        })
})

// SUBJECTS
app.get('/subjects', (req, res) => {
    // show all subjects data
    Subject.findAll()
        .then(data => {
            let info = req.query.info
            res.render('subjects.ejs', {data: data, info: info})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/subjects/add', (req, res) => {
    res.render('subjectsAdd.ejs')
})
app.post('/subjects/add', (req, res) => {
    let obj = {
        subject_name: req.body.subject_name
    }
    Subject.create(obj)
        .then(() => {
            let info = 'Successfully add subject'
            res.redirect(`/subjects?info=${info}`)
        })
        .catch(err => {
            res.send(err)  
        })
})

app.get('/subjects/edit/:id', (req, res) => {
    let id = req.params.id
    res.render('subjectsEdit.ejs', {id})
})
app.post('/subjects/edit/:id', (req, res) => {
    let id = req.params.id
    let obj = {
        id: id,
        subject_name: req.body.subject_name
    }
    Subject.update(obj, {where: {id: id}})
        .then(() => {
            let info = 'Successfully edit subject'
            res.redirect(`/subjects?info=${info}`)
        })
        .catch(err => {
            res.send(err)  
        })
})

app.get('/subjects/delete/:id', (req, res) => {
    let id = req.params.id
    Subject.destroy({where: {id: id}})
        .then(data => {
            if (data) {
                let info = 'Successfully delete subject'
                res.redirect(`/subjects?info=${info}`)
            }
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/*', (req, res) => {
    res.send('PAGE NOT FOUND')
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
})