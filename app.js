// Load Express Module
const db = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

// Load EJS engine
app.set('view engine', 'ejs');
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World');
});

// Student Section
app.get('/students', (req, res) => {

  db.Student.findAll()

  .then((result) => {
    res.render('student', {dataStudent: result});
  }).catch((err) => {
    res.send(err);
  });

});

app.get('/students/add', (req, res) => {
  res.render('studentAdd');
});

app.post('/students/add', (req, res) => {

  db.Student.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  
  .then(() => {
    res.redirect('/students');
  }).catch((err) => {
    res.send(err);
  });

});

app.get('/students/edit/:id', (req, res) => {

  db.Student.findOne({
    where: {
      id: req.params.id
    }
  })

  .then((result) => {
    res.render('studentEdit', {editStudent: result});
  }).catch((err) => {
    res.send(err);
  });
  
});

app.post('/students/edit/:id', (req, res) => {
  db.Student.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }, {
    where: {
      id: req.params.id
    }
  })

  .then(() => {
    res.redirect('/students');
  }).catch((err) => {
    res.send(err);
  });

});

app.get('/students/delete/:id', (req, res) => {
  db.Student.destroy({
    where: {
      id: req.params.id
    }
  })

  .then(() => {
    res.redirect('/students');
  }).catch((err) => {
    res.send(err);
  });

});

// Teacher Section
app.get('/teachers', (req, res) => {

  db.Teacher.findAll()

    .then((result) => {
      res.render('teacher', {dataTeacher: result});
    }).catch((err) => {
      res.send(err);
    });

});

app.get('/teachers/add', (req, res) => {
  res.render('teacherAdd');
});

app.post('/teachers/add', (req, res) => {

  db.Teacher.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  
  .then(() => {
    res.redirect('/teachers');
  }).catch((err) => {
    res.send(err);
  });

});

app.get('/teachers/edit/:id', (req, res) => {

  db.Teacher.findOne({
    where: {
      id: req.params.id
    }
  })

  .then((result) => {
    res.render('teacherEdit', {editTeacher: result});
  }).catch((err) => {
    res.send(err);
  });

});

app.post('/teachers/edit/:id', (req, res) => {
  db.Teacher.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }, {
    where: {
      id: req.params.id
    }
  })

  .then(() => {
    res.redirect('/teachers');
  }).catch((err) => {
    res.send(err);
  });

});

app.get('/teachers/delete/:id', (req, res) => {
  db.Teacher.destroy({
    where: {
      id: req.params.id
    }
  })

  .then(() => {
    res.redirect('/teachers');
  }).catch((err) => {
    res.send(err);
  });

});


// Running app server
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port} ...`);
});