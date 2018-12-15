
const express = require("express");
const app = express();

const Students = require("./Controller/controller");

app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");

app.get("/students", function(req, res) {
    Students.getAllDataStudents().then(data => {
        res.render("student.ejs", {data: data})
    }).catch(err => {
        res.send(err)
    })
})

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
        res.redirect("/students")
    }).catch(err => {
        res.send(err)
    })
})

app.get("/students/edit/:id", function(req, res) {
    res.render("edit-students.ejs")
})

app.post("/students/edit/:id", function(req, res) {
    let update = {
        id : req.params.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    Students.updateStudents(update).then(data => {
        res.redirect("/students")
    }).catch(err => {
        res.send(err)
    })
})

app.get("/students/delete/:id", function(req, res) {
    Students.deleteStudents(req.params.id).then(deleted => {
        // res.send("sukses")
        res.redirect("home.ejs")
    }).catch(err => {
        res.send(err)
    })
})

app.listen(3000, () => {
    console.log("Running through local host...")
})