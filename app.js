const express = require('express')
const home = require('./routes')
const students = require('./routes/student')
const teachers = require('./routes/teacher')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/', home)

app.use('/students', students)
app.use('/teachers', teachers)

app.listen(port, () => {
    console.log('This app running on port ... ',port)
})