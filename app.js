'use strict'
var path = require('path');
const Model = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('req-flash');

const app = express();

app.use(session({
  secret: 'djhxcvxfgshajfgjhgsjhfgsakjeauytsdfy',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs', { head : 'KANGMAN SCHOOL', title : 'KANGMAN SCHOOL', message : 'Hello there, Sign up and Join with Us'})
})


app.get('/student', (req, res) => {
  Model.Student.findAll()
  .then((students) => {
    res.render('student.ejs', {
      head: 'KMSCHOOL',
      title : 'STUDENTS DATA',
      data: students,
      postSuccessMsg: req.flash('postSuccessMsg'),
      postErrorMsg: req.flash('postErrorMsg')
    })
  })

  .catch((err) => {
    console.log(err);
  })
})

app.get('/student/add', (req, res) => {
  res.render('addStudent.ejs', {
    head: 'KMSCHOOL',
    title : 'FORM STUDENT',
    message : 'Insert Data Student'})
})

app.get('/student/edit/:id', (req, res) => {
  let id = req.params.id;
  Model.Student.findByPk(id)
    .then((student) => {
      res.render('editStudent.ejs', {
        head: 'KMSCHOOL',
        title : `EDIT STUDENT`,
        message : `Edit Data Student  ${student.first_name} ${student.last_name}`,
        student: student})
    })

    .catch((err) => {
      res.send(err);
    })
})

app.get('/student/delete/:id', (req, res) => {
  let id = req.params.id;
  Model.Student.destroy({
    where : { id : id}
  })
    .then(() => {
      req.flash('postSuccessMsg', 'Successfully delete student!!!');
      console.log(postSuccessMsg);
      res.redirect('/student')
    })

    .catch((err) => {
      req.flash('postErrorMsg', 'Something went wrong while deleting student!!!');
      res.redirect('/student')
    })
})


app.post('/student', (req, res) => {
  let newStudent = req.body;
  Model.Student.create(newStudent)
  .then((data) => {
    res.redirect('/student')
  })

  res.redirect('/student')
  .catch((err) => {
    console.log(err);
  })
})

app.post('/student/edit/:id', (req, res) => {
  let newStudent = req.body;
  let id = req.params.id;
  Model.Student.update(newStudent, {
    where : {
      id : id
    }
  })
  .then((data) => {
    res.redirect('/student')
  })

  .catch((err) => {
    console.log(err);
  })
})

app.get('/teacher', (req, res) => {
  Model.Teacher.findAll()
  .then((teachers) => {
    res.render('teacher.ejs', {
      head: 'KMSCHOOL',
      title : 'TEACHERS DATA',
      data: teachers,
      postSuccessMsg: req.flash('postSuccessMsg'),
      postErrorMsg: req.flash('postErrorMsg')
    })
  })

  .catch((err) => {
    console.log(err);
  })
})

app.get('/teacher/add', (req, res) => {
  res.render('addTeacher.ejs', {
    head: 'KMSCHOOL',
    title : 'FORM TEACHER',
    message : 'Insert Data Teacher'})
})


app.get('/teacher/edit/:id', (req, res) => {
  let id = req.params.id;
  Model.Teacher.findByPk(id)
    .then((teacher) => {
      res.render('editTeacher.ejs', {
        head: 'KMSCHOOL',
        title : `EDIT TEACHER`,
        message : `Edit Data Teacher  ${teacher.first_name} ${teacher.last_name}`, teacher: teacher})
    })

    .catch((err) => {
      res.send(err);
    })
})

app.get('/teacher/delete/:id', (req, res) => {
  let id = req.params.id;
  Model.Teacher.destroy({
    where : { id : id}
  })
    .then(() => {
      req.flash('postSuccessMsg', 'Successfully delete teacher!!!');
      res.redirect('/teacher')
    })

    .catch((err) => {
      req.flash('postErrorMsg', 'Something went wrong while deleting teacher!!!');
      res.redirect('/teacher')
    })
})

app.post('/teacher', (req, res) => {
  let newTeacher = req.body;
  Model.Teacher.create(newTeacher)
  .then((data) => {
    res.redirect('/teacher')
  })

  .catch((err) => {
    console.log(err);
  })
})

app.post('/teacher/edit/:id', (req, res) => {
  let newTeacher = req.body;
  let id = req.params.id;
  Model.Teacher.update(newTeacher, {
    where : {
      id : id
    }
  })
  .then((data) => {
    res.redirect('/teacher')
  })

  .catch((err) => {
    console.log(err);
  })
})

app.get('/subject', (req, res) => {
  Model.Subject.findAll()
  .then((subjects) => {
    res.render('subject.ejs', {
      head: 'KMSCHOOL',
      title : 'SUBJECTS DATA',
      data: subjects,
      postSuccessMsg: req.flash('postSuccessMsg'),
      postErrorMsg: req.flash('postErrorMsg')
    })
  })

  .catch((err) => {
    console.log(err);
  })
})

app.get('/subject/add', (req, res) => {
  res.render('addSubject.ejs', {
    head: 'KMSCHOOL',
    title : 'FORM SUBJECT',
    message : 'Insert Data Subject'})
})


app.get('/subject/edit/:id', (req, res) => {
  let id = req.params.id;
  Model.Subject.findByPk(id)
    .then((subject) => {
      res.render('editSubject.ejs', {
        head: 'KMSCHOOL',
        title : `EDIT SUBJECT`,
        message : `Edit Data Subject  ${subject.subject_name}`,
        subject: subject
      })
    })

    .catch((err) => {
      res.send(err);
    })
})

app.get('/subject/delete/:id', (req, res) => {
  let id = req.params.id;
  Model.Subject.destroy({
    where : { id : id}
  })
    .then(() => {
      req.flash('postSuccessMsg', 'Successfully delete subject!!!');
      res.redirect('/subject')
    })

    .catch((err) => {
      req.flash('postErrorMsg', 'Something went wrong while deleting subject!!!');
      res.redirect('/subject')
    })
})

app.post('/subject', (req, res) => {
  let newSubject = req.body;
  Model.Subject.create(newSubject)
  .then((data) => {
    res.redirect('/subject')
  })

  .catch((err) => {
    console.log(err);
  })
})

app.post('/subject/edit/:id', (req, res) => {
  let newSubject = req.body;
  let id = req.params.id;
  Model.Subject.update(newSubject, {
    where : {
      id : id
    }
  })
  .then((data) => {
    res.redirect('/subject')
  })

  .catch((err) => {
    console.log(err);
  })
})


app.listen(3000, () => {
  console.log('App listening on port 3000');
})