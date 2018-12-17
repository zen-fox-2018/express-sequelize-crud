
const express = require("express");
const app = express();

const Students = require("./Controller/students");
const Teacher = require("./Controller/teachers");
const Subject = require("./Controller/subject")
app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");

//get all data students
app.get("/students", function(req, res) {
    Students.getAllDataStudents().then(data => {
        // res.send(data)
        res.render("student.ejs", {data: data})
    }).catch(err => {
        res.send(err)
    })
})

//get all data teacher
app.get("/teachers", function(req, res) {
    Teacher.getAllDataTeachers().then(teacher => {
        res.render("teacher.ejs", {teacher: teacher})
    }).catch(err => {
        res.send(err)
    })
})

//add students
app.get("/students/add", function(req, res) {
    res.render("student-form.ejs")
})

app.post("/students/add", function(req, res) {
    let data = {
        firstName: req.body.first_name,
        lastName: req.body.last_name,
        email: req.body.email
    }
    Students.addStudents(data).then(students => {
        res.redirect("/students", {data: students})
    }).catch(err => {
        res.send(err)
    })
})

//add teacher
app.get("/teachers/add", function(req, res) {
    res.render("teachers-form.ejs")
})

app.post("/teachers/add", function(req, res) {
    Teacher.addTeacher(req.body).then(teacher => {
        res.redirect("/teachers")
    }).catch(err => {
        res.send(err)
    })
})

//edit students
app.get("/students/edit/:id", function(req, res) {
    Students.findByOne(req.params.id).then(found => {
        res.render("edit-students.ejs", {data: found.dataValues})
    }).catch(err => {
        res.send(err)
    })
})

app.post("/students/edit/:id", function(req, res) {
    let data = req.body;
    Students.updateStudents(data, req.params.id).then(updated => {
        res.redirect("/students")
    }).catch(err => {
        res.send(err)
    })
})

app.get("/students/delete/:id", function(req, res) {
    Students.deleteStudents(req.params.id).then(deleted => {
        res.redirect("/students")
    }).catch(err => {
        res.send(err)
    })
})

//edit teachers
app.get("/teachers/edit/:id", function(req, res) {
    Teacher.findOne(req.params.id).then(found =>{
        res.render("edit-teachers.ejs", {data: found.dataValues})
    }).catch(err => {
        res.send(err)
    })
})

app.post("/teachers/edit/:id", function(req, res) {
    Teacher.updateTeachers(req.body, req.params.id).then(updated => {
        res.redirect("/teachers")
    }).catch(err => {
        res.send(err)
    })
})

//delete teachers
app.get("/teachers/delete/:id", function(req, res) {
    Teacher.deleteTeachers(req.params.id).then(deleted => {
        // res.send("sukses")
        res.redirect("/teachers")
    }).catch(err => {
        res.send(err)
    })
})

//get all data subjects
app.get("/subjects", function(req, res) {
    Subject.getDataSubjects().then(data => {
        res.render("subject.ejs", {data: data})
    }).catch(err => {
        res.send(err)
    })
})

//add subject
app.get("/subjects/add", function(req, res) {
    res.render("subject-form.ejs")
})

app.post("/subjects/add", function(req, res) {
    Subject.addSubject(req.body).then(newSubject => {
        res.redirect("/subjects")
    }).catch(err => {
        res.send(err)
    })
})

//edit subjects
app.get("/subjects/edit/:id", function(req, res) {
    Subject.findByOne(req.params.id).then(found =>{
        res.render("edit-subjects.ejs", {data: found.dataValues})
    }).catch(err => {
        res.send(err)
    })
})

app.post("/subjects/edit/:id", function(req, res) {
    // console.log(req.body)
    Subject.updateSubjects(req.body, req.params.id).then(data => {
        res.redirect("/subjects")
    }).catch(err => {
        res.send(err)
    })
})

//delete subjects
app.get("/subjects/delete/:id", function(req, res) {
    Subject.deleteSubject(req.params.id).then(deleted => {
        res.redirect("/subjects")
    }).catch(err => {
        res.send(err)
    })
})

app.listen(3000, () => {
    console.log("Running through local host...")
})