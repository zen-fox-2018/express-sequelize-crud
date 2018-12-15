const express = require('express')
const app = express()
const port = 3000
const Model = require('./models')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
// Model.Teacher.findAll()
// .then(data => {
//     data.forEach(element => {
//         console.log(element.dataValues)
//     });
// })
// .catch(err => {
//     console.log(err)
// })


//TEACHER
app.get('/', function(req, res) {
    res.send('MASUKKIN INDEX KE SELURUH DUNIA')
})

app.get('/teachers', function(req, res) {
    // res.send("tes ya boi")
    Model.Teacher.findAll()
    .then(allTeachers => {
        let allData = []
        allTeachers.forEach(element => {
            allData.push(element.dataValues)
        });
        res.render('./teachers_table.ejs', 
        {title: 'Teachers List', allData, route: 'teachers'})
    })
    .catch(err => {
        res.send(`ERROR!: ${err}`)
    })
})

app.get('/teachers/add', function(req, res) {
    res.render('./teachers_registration_form.ejs')
})

app.post('/teachers/add', function(req, res) {
    let e = req.body
    let teacherData = {
        first_name: e["First Name"],
        last_name: e["Last Name"],
        email: e["Email"],
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Teacher.create(teacherData)
    .then(teacherData => {
        res.redirect('/')
    })
    .catch(err => {
        res.send(err)
    })
})


//STUDENT
app.get('/students', function(req, res) {
    Model.Student.findAll()
    .then(allStudents => {
        let allData = []
        allStudents.forEach(element => {
            allData.push(element.dataValues)
        });
        res.render('./students_table.ejs', 
        {title: 'Students List', allData, route: 'students'})        
    })
})

app.get('/students/add', function(req, res) {
    res.render('./student_registration_form.ejs')
})

app.post('/students/add', function(req, res) {
    let e = req.body
    let studentData = {
        first_name: e["First Name"],
        last_name: e["Last Name"],
        email: e["Email"],
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Student.create(studentData)
    .then(studentsData => {
        res.redirect('/')
    })
    .catch(err => {
        res.send(err)
    })
})

app.get('/students/edit/:id', function(req, res) {
    let getId = req.params.id
    Model.Student.findByPk(getId)
    .then(studentData => {
        // console.log(studentData.dataValues);
        // res.send(studentData.dataValues.first_name)
        let data = studentData.dataValues
        res.render('./edit_student_page.ejs', 
        {
            title: 'Edit Student Data',
            getId,
            data
        })
    })
    .catch(err => {
        res.send(err)
    })
})

app.post('students/edit/:id', function(req, res) {
    let newStud = req.body
    console.log('====>', newStud);
    console.log(req.params);
    
    // Model.Student.update(newStud, {where: {id: req.params.id}})
    // .then(function() {
    //     res.redirect('/students')
    // })
    // .catch(err => {
    //     res.send(err)
    // })
})

//SUBJECTS

app.get('/subjects', function(req, res) {
    // res.send("tes ya boi")
    Model.Subject.findAll()
    .then(allSubjects => {
        let allData = []
        allSubjects.forEach(element => {
            allData.push(element.dataValues)
        });
        res.render('./subjects_table.ejs', 
        {title: 'Subjects List', allData, route: 'subjects'})
    })
    .catch(err => {
        res.send(`ERROR!: ${err}`)
    })
})

app.get('/subjects/add', function(req, res) {
    res.render('./subjects_form.ejs')
})

app.post('/subjects/add', function(req, res) {
    let e = req.body
    let subjectData = {
        subject_name: e["subject_name"],
        createdAt: new Date(),
        updatedAt: new Date()
    }
    Model.Subject.create(subjectData)
    .then(subjectData => {
        res.redirect('/')
    })
    .catch(err => {
        res.send(err)
    })
})

app.listen(port, function() {
    console.log(`Server is listening to port ${port}`)
})