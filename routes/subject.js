const route = require('express')()
const Controller = require('../controllers/subjectController')

route.get('/', (req, res) => {
    Controller.findAll()
        .then(data => {            
            res.render('subject/subject-home.ejs', {data: data})
        })
        .catch(err => {
            res.send(err)
        })
})


route.get('/add', (req, res) => {
    res.render('subject/form-add-subject.ejs')
})

route.post('/add', (req, res) => {
    Controller.create(req.body)
        .then(data => {
            res.send('Sukses add new subject')
        })
        .catch(err => {
            res.send('Error add new subject')
        })
})

route.get('/edit/:id', (req, res) => {
    Controller.findOne(req.params.id)
        .then(data => {
            res.render('subject/form-edit-subject.ejs', {data: data})
        })
        .catch(err => {
            res.send(err)
        })
})

route.post('/edit/:id', (req, res) => {
    Controller.update(req.body, req.params.id)
        .then(data => {
            res.send('sukses update')
        })
        .catch(err => {
            res.send(err)
        })
})

route.get('/delete/:id', (req, res) => {
    Controller.delete(req.params.id)
        .then(data => {
            res.send('Sukses delete')
        })
        .catch(err => {
            res.send(err)
        })
})

module.exports = route
