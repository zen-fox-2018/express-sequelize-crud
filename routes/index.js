const route = require('express')()

route.get('/', (req, res) => {
    res.render('home.ejs')
})

module.exports = route