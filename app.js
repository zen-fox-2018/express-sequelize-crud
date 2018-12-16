const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
// const TeacherController = require('./controllers/TeacherController')
const Model = require('./models')

app.get('/', function (req, res) {
    res.send('i love hacktiv8')
})

app.get('/teacher', function (req, res) {
    Model.Teacher.findAll()
        .then(allTeacherData => {
            // allTeacherData.forEach(singleTeacherData => {
            //     View.showSuccess(singleTeacherData.dataValues)
            //     // dataView.push(singleTeacherData)
            // });
            res.render('teacher.ejs', { data: allTeacherData })

        })
        .catch(err => {
            res.send(err)
        })

})

app.get('/teacher/add', function (req, res) {
    res.render('addTeacher.ejs')
})
app.post('/teacher/add', function (req, res) {
    let newTeacher = req.body
    let objTeacher = {
        first_name: newTeacher['first_name'],
        last_name: newTeacher['last_name'],
        email: newTeacher['email']
    }
    Model.Teacher.create(objTeacher)
    .then(()=>{
        res.redirect('/teacher')
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/teacher/edit/:id',function(req,res){
    let search_id = req.params.id
    Model.Teacher.findOne({where:{id:search_id}})
    .then((datanya)=>{
        res.render('editTeacherData.ejs',{data: datanya})
    })
    .catch(err=>{
        res.send(err)
    })
})

app.post('/teacher/edit/:id', function(req,res){
    let search_id = req.params.id
    let editedData = req.body
    Model.Teacher.update({
        first_name : editedData['first_name'],
        last_name: editedData['last_name'],
        email: editedData['email']
    },{where:{id:search_id}})
    .then(()=>{
        res.redirect('/teacher')
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/teacher/delete/:id',function(req,res){
    let search_id = req.params.id
    Model.Teacher.destroy({where:{id:search_id}})
    .then(()=>{
        res.redirect('/teacher')
    })
    .catch(err=>{
        res.send(err)
    })
})



app.get('/student', function (req, res) {
    Model.Student.findAll()
        .then(allStudentData => {
            res.render('student.ejs', { data: allStudentData })

        })
        .catch(err => {
            res.send(err)
        })

})

app.get('/student/add', function (req, res) {
    res.render('addStudent.ejs')
})
app.post('/student/add', function (req, res) {
    let newStudent = req.body
    let objStudent = {
        first_name: newStudent['first_name'],
        last_name: newStudent['last_name'],
        email: newStudent['email']
    }
    Model.Student.create(objStudent)
    .then( ()=>{
        res.redirect('/student')
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/student/edit/:id',function(req,res){
    let search_id = req.params.id
    Model.Student.findOne({where:{id:search_id}})
    .then((datanya)=>{
        res.render('editStudentData.ejs',{data: datanya})
    })
    .catch(err=>{
        res.send(err)
    })
})

app.post('/student/edit/:id', function(req,res){
    let search_id = req.params.id
    let editedData = req.body
    Model.Student.update({
        first_name : editedData['first_name'],
        last_name: editedData['last_name'],
        email: editedData['email']
    },{where:{id:search_id}})
    .then(()=>{
        res.redirect('/student')
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/student/delete/:id',function(req,res){
    let search_id = req.params.id
    Model.Student.destroy({where:{id:search_id}})
    .then(()=>{
        res.redirect('/student')
    })
    .catch(err=>{
        res.send(err)
    })
})


app.get('/subject', function (req, res) {
    Model.Subject.findAll()
        .then(allSubjectData => {
            res.render('subject.ejs', { data: allSubjectData })

        })
        .catch(err => {
            res.send(err)
        })

})

app.get('/subject/add', function (req, res) {
    res.render('addSubject.ejs')
})
app.post('/subject/add', function (req, res) {
    let objSubject = req.body
    let objSubject = {
        subject_name: objSubject['subject_name']        
    }
    Model.Subject.create(objSubject)
    .then( ()=>{
        res.redirect('/subject')
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/subject/edit/:id',function(req,res){
    let search_id = req.params.id
    Model.Subject.findOne({where:{id:search_id}})
    .then((datanya)=>{
        res.render('editSubjectData.ejs',{data: datanya})
    })
    .catch(err=>{
        res.send(err)
    })
})

app.post('/subject/edit/:id', function(req,res){
    let search_id = req.params.id
    let editedData = req.body
    Model.Student.update({
        subject_name : editedData['subject_name']
        
    },{where:{id:search_id}})
    .then(()=>{
        res.redirect('/subject')
    })
    .catch(err=>{
        res.send(err)
    })
})

app.get('/subject/delete/:id',function(req,res){
    let search_id = req.params.id
    Model.Subject.destroy({where:{id:search_id}})
    .then(()=>{
        res.redirect('/subject')
    })
    .catch(err=>{
        res.send(err)
    })
})


app.listen(3000, function () {
    console.log(`server listening on port 3000`)
})
