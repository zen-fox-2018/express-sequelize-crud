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

module.exports = route
