const express = require(`express`)
const app = express()
const Model = require(`./models`)
const Teacher = Model.Teacher
const Student = Model.Student
const Subject = Model.Subject

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {

    res.render(`home.ejs`)
});

//STUDENT
app.get('/student', (req, res) => {
    Student.findAll().then((result) => {
        res.render(`./students/index.ejs`, {
            data: result
        })

    }).catch((err) => {
        res.send(err);
    });
});

app.get('/student/add', (req, res) => {
    res.render(`./students/add.ejs`)
});

app.post('/student/add', (req, res) => {
    Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }).then((result) => {
        res.redirect(`/`)
    }).catch((err) => {
        res.send(err)
    });
});

app.get('/student/edit/:id', (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.render(`./students/edit.ejs`, {
            data: result
        })
    }).catch((err) => {

    });
});

app.post('/student/edit/:id', (req, res) => {
    Student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }, {
            where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/student`)
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/student/delete/:id', (req, res) => {
    Student.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/student`)
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/teacher', (req, res) => {
    Teacher.findAll().then((result) => {
        res.render(`./teachers/index.ejs`, {
            data: result
        })
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/teacher/add', (req, res) => {
    res.render(`./teachers/add.ejs`)
});

app.post('/teacher/add', (req, res) => {
    Teacher.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }).then((result) => {
        res.redirect(`/teacher`)
    }).catch((err) => {
        res.send(err)
    });
});

app.get('/teacher/edit/:id', (req, res) => {
    Teacher.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.render(`./teachers/edit.ejs`, {
            data: result
        })
    }).catch((err) => {

    });
});

app.post('/teacher/edit/:id', (req, res) => {
    Teacher.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }, {
            where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/teacher`)
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/teacher/delete/:id', (req, res) => {
    Teacher.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/teacher`)
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/subject', (req, res) => {
    Subject.findAll().then((result) => {
        res.render(`./subjects/index.ejs`, {
            data: result
        })
    }).catch((err) => {
       res.send(err); 
    });
});

app.get('/subject/add', (req, res) => {
    res.render(`./subjects/add.ejs`)
});

app.post('/subject/add', (req, res) => {
    Subject.create({
        subject_name: req.body.subject_name
    }).then((result) => {
        res.redirect(`/subject`)
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/subject/edit/:id', (req, res) => {
    Subject.findOne({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.render(`./subjects/edit.ejs`, {
            data: result
        })
        
    }).catch((err) => {
        res.send(err)
    });
});

app.post('/subject/edit/:id', (req, res) => {
    Subject.update({
        subject_name: req.body.subject_name
    },{
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/subject`)
    }).catch((err) => {
        res.send(err);
    });
});

app.get('/subject/delete/:id', (req, res) => {
    Subject.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.redirect(`/subject`)
    }).catch((err) => {
        res.send(err);
    });
});


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});