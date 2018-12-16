const route = require('express')()
const Controller = require('../controllers/studentController')

route.get('/', (req, res) => {
    Controller.findAll()
        .then(data => {
            res.render('student/student-home.ejs', {data: data})
        })
        .catch(err => {
            res.send(err)
        })
})

route.get('/add', (req, res) => {
    res.render('student/form-add-student.ejs')
})

route.post('/add', (req, res) => {
    Controller.create(req.body)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send('FAILED')
        })
})

route.get('/edit/:id', (req,res) => {
    Controller.findOne(req.params.id)
        .then(data => {
            res.render('student/form-edit-student.ejs', {data: data.dataValues})
        })
        .catch(err => {
            res.send(err)
        })
})

route.post('/edit/:id', (req, res) => {
    Controller.update(req.body, req.params.id)
        .then(data => {
            res.render('student/success-page.ejs')
        })
        .catch(err => {
            res.send('error')
        })
})

route.get('/delete/:id', (req, res) => {
    Controller.delete(req.params.id)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send('failed')
        })
})
module.exports = route