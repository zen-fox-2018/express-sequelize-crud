var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var app = express();
var flash = require('connect-flash')

const port = 3000
const Model = require('./models')
const Student = Model.Student
const Teacher = Model.Teacher
const Subject = Model.Subject

app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(flash())

app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.get('/students?', (req,res)=> {
   
    Student.findAll()
    .then(data => {
        let err = req.query.err
        let info= req.query.info
        res.render('student.ejs' ,{dataSend:data, info:info, err:err})
    })
    .catch(err => res.send(err))
    
})

app.get('/students/add', (req,res) => {
    res.render('studentadd.ejs')
})


app.post('/students/add', (req, res)=> {
    
    Student.create(req.body)
    .then(newUser => {
        res.redirect(`/students?info=Success%20Add%20Data%20${req.body.first_name}`)
    })
    .catch(err => res.redirect(`/students?err=${err}`))
   
})


app.get('/students/edit/:id', (req, res) => {
    let tempId = req.params.id
    res.render('studentedit.ejs', {tempId})
})

app.post('/students/edit/:id',(req, res)=> {
    let tempId = req.params.id
    Student.update(req.body,{
        where:{
            id:tempId
        }
    })
    .then(()=> {
        res.redirect(`/students?info=Success%20Edit%20Student%20Data%20${req.body.first_name}`)
    })
    .catch(err => res.redirect(`/students?err=${err}`))
    
})

app.get('/students/delete/:id', (req, res)=> {
    let tempId = req.params.id
    Student.destroy({where: {
        id: tempId
    }})
    .then(()=> {
        res.redirect(`/students?info=Success%20Delete%20Data%20With%20Id%20${tempId}`)
    })
    .catch(err => res.redirect(`/students?err=${err}`))
})

app.get('/teachers?', (req,res) => {
    Teacher.findAll()
    .then(data=> {
        let info = req.query.info
        let err = req.query.err
        res.render('teacher.ejs', {dataSend:data, info:info , err:err})
    })
    .catch(err => res.send(err))
})

app.get('/teachers/add', (req, res) => {
    res.render('teacheradd.ejs')
})

app.post('/teachers/add', (req, res)=> {

    Teacher.create(req.body)
    .then(() => {
        res.redirect(`/teachers?info=Success%20Add%20Data%20${req.body.first_name}`)
    })
    .catch(err => res.redirect(`/teachers?err=${err}`))
})

app.get('/teachers/edit/:id', (req, res)=> {
    let tempId = req.params.id
    res.render('teacheredit.ejs', {tempId})
})

app.post('/teachers/edit/:id',(req, res)=> {
    let tempId = req.params.id
    Teacher.update(req.body,{
        where:{
            id:tempId
        }
    })
    .then(()=> {
        res.redirect(`/teachers?info=Success%20Edit%20Teacher%20Data%20${req.body.first_name}`)
    })
    .catch(err => res.redirect(`/teachers?err=${err}`))
    
})

app.get('/teachers/delete/:id', (req, res) => {
    let tempId = req.params.id
    Teacher.destroy({where: {
        id:tempId
    }})
    .then(()=> {
        res.redirect(`/teachers?info=Success%20Delete%20Teacher%20With%20Id%20${tempId}`)
    })
    .catch(err => res.redirect(`/teachers?err=${err}`))
})

app.get('/subjects?', (req, res)=> {
    let info = req.query.info
    let err = req.query.err
    Subject.findAll()
    .then(data => res.render('subject.ejs', {dataSend:data , info:info, err:err}))
    .catch(err => res.send(err))
})

app.get('/subjects/add', (req, res)=> {
    res.render(`subjectadd.ejs`)
})

app.post('/subjects/add', (req, res)=> {

    Subject.create(req.body)
    .then(() => {
        res.redirect(`/subjects?info=Success%20Add%20Data%20${req.body.subject_name}`)
    })
    .catch(err => res.redirect(`/subjects?err=${err}`))
})

app.get('/subjects/edit/:id', (req, res)=> {
    let tempId = req.params.id
    res.render('subjectedit.ejs', {tempId})
})

app.post('/subjects/edit/:id',(req, res)=> {
    let tempId = req.params.id
    Subject.update(req.body,{
        where:{
            id:tempId
        }
    })
    .then(()=> {
        res.redirect(`/subjects?info=Success%20Edit%20Subject%20Data%20${req.body.subject_name}`)
    })
    .catch(err => res.redirect(`/subjects?err=${err}`))
    
})

app.get('/subjects/delete/:id', (req, res)=> {
    let tempId = req.params.id

    Subject.destroy({where: {
        id:tempId
    }})
    .then(()=> res.redirect(`/subjects?info=Success%20Delete%20Subject%20With%20Id%20${tempId}`))
    .catch(err => res.redirect(`/subjects?err=${err}`))
})

app.listen(port, () => console.log(`Server running at port ${port}`))