const express =  require('express')
const app = express()
const port = 3000
const Models = require('./models')

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

app.get('/', function (req,res) {
    res.send('Hello world')
})

//login page

// app.get('/login/:email/:password',function(req,res){
//     let data = {email:req.params.email,
//                 password: req.params.password}
//                 console.log(data);
                
//     res.render('login.ejs',{data})
// });

// app.post('/login/:email/:password', function(req,res){
//     let data = {email:req.params.email,
//         password: req.params.password}
    
//     Models.Teacher.findOne({ where: {isLogin: 1}} )
//     .then(dataFound=>{
//         if(dataFound == null) {
//           //  console.log('masuk kog');    
//           console.log(data);      
//             Models.Teacher.update({
                
//                                     isLogin: 1
//                                         },
//                                 {       
//                                     where : {
//                                             email: req.params.email,
//                                             password: req.params.password                                        
//                                             }
//                                         })       
//         } else { 
//             Models.Teacher.update({
//                                     isLogin:0
//                                         },
//                                     { where : {isLogin : 1}

//                                     })
                
//         }
//     })
//     .then( ()=>{
//         res.redirect('/teachers')
//     })
//     .catch(err => {
//         console.log(err);      
//     })
// })

// add students page

app.get('/students/add', function(req,res) {
    res.render('addstudents.ejs')
})

app.post('/students/add', function(req,res){
    let Obj = {
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                createdAt : new Date,
                updatedAt: new Date
                }
    Models.Student.create(Obj)
    .then(data =>{ 
        res.redirect('/students/all')
    })
    .catch(err => {
        res.redirect(err)
    })
    
})

// halaman depan students

app.get('/teachers',function(req,res){
    Models.Teacher.findAll()
    .then(data =>{
        let value = data.map( a=> a.dataValues)
       res.render('teachers.ejs',{ value })
    })
    .catch(err => {
        console.log(err);      
    })
    
})

// student edit page

app.get('/students/edit/:id', function(req,res) {
    let theId = req.params.id
    Models.Student.findOne({where: {id : theId}})
    .then((rawData) => {
        res.render('stuedit',{data:rawData})
    })
    .catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/students/edit/:id', function(req,res){
   // let getId = req.params.id
    Models.Student.update ({ first_name: req.body.first_name,
                              last_name: req.body.last_name,
                              email: req.body.email},
                              {where : {id: req.params.id}})
    .then(()=> {
        res.redirect('/students/all')
    })
    .catch((err)=> {
        res.redirect(err)
    })

})

//student delete page

app.get('/students/delete/:id', function(req,res) {
    let getId = req.params.id
    Models.Student.destroy({
                             where : {
                                 id: getId
                             }
                            })
    .then(()=> {
        res.redirect('/students/all')
    })
    .catch((err)=> {
        res.redirect(err)
    })
})

// all student page

app.get('/students/all',function(req,res){
    Models.Student.findAll()
    .then((data)=>{
        let value = data.map( a=> a.dataValues)
        res.render('allstudents.ejs', {value})
    })
    .catch((err)=> {
        res.redirect(err)
    })
   
})

app.get('/teachers/edit/:id', function(req,res) {
    let theId = req.params.id
    Models.Teacher.findOne({where: {id : theId}})
    .then((rawData) => {
        res.render('teacherEdit',{data:rawData})
    })
    .catch((err) => {
        res.status(400).send(err)
    })
})

app.post('/teachers/edit/:id', function(req,res){
   // let getId = req.params.id
    Models.Teacher.update ({ first_name: req.body.first_name,
                              last_name: req.body.last_name,
                              email: req.body.email},
                              {where : {id: req.params.id}})
    .then(()=> {
        res.redirect('/teachers/')
    })
    .catch((err)=> {
        res.redirect(err)
    })

})


app.get('/teachers/delete/:id', function(req,res) {
    let getId = req.params.id
    Models.Teacher.destroy({
                             where : {
                                 id: getId
                             }
                            })
    .then(()=> {
        res.redirect('/teachers')
    })
    .catch((err)=> {
        res.redirect(err)
    })
})


app.get('/teachers/add', function(req,res) {
    res.render('addteachers.ejs')
})

app.post('/teachers/add', function(req,res){
    let Obj = {
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                createdAt : new Date,
                updatedAt: new Date,
                password: req.body.password
                }
    Models.Student.create(Obj)
    .then(data =>{ 
        res.redirect('/teachers')
    })
    .catch(err => {
        res.redirect(err)
    })
    
})

app.listen(port, function(){
    console.log(`listen to ${port}`)
})

