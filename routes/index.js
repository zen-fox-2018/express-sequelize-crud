const route = require('express')()
const studentController = require('../controllers/studentController')
const subjectController = require('../controllers/subjectController')
const teacherController = require('../controllers/teacherController')


route.get('/', (req,res) => {
    let temp = []
    studentController.findAll()
    .then(data => {
        temp.push(data)
        return teacherController.findAll()
    })
    .then(teacher => {
        temp.push(teacher)
        return subjectController.findAll()
    })
    .then(subject => {
        temp.push(subject)
        res.render('home.ejs', {data: temp})
    })
    .catch(err => {
        res.send(err)
    })
})

module.exports = route