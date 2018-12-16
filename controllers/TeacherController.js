const Model = require('../models')
const View = require('../views/ControllerView.js')

class TeacherController {
    static readData(){
        Model.Teacher.findAll()
        .then(allTeacherData=>{
            // let dataView = []
            allTeacherData.forEach(singleTeacherData => {
                View.showSuccess(singleTeacherData.dataValues)
                // dataView.push(singleTeacherData)
            });
            // return dataView
            // process.exit()
        })
        .catch(err=>{
            View.showError(err)
        })
    }

    static addData(first_name,last_name, email){
        let objTeacher = {
            first_name : first_name,
            last_name : last_name,
            email : email
        }
        Model.Teacher.create(objTeacher)
        .then(newdata=>{
            View.showSuccess(newdata.dataValues)
        })
        .catch(err=>{
            View.showError(err)
        })
    }

    static deleteData(id){
        Model.Teacher.destroy({where:{id : id}})
        .then(()=>{
            View.showSuccess(`data with id ${id} successfuly deleted`)
        })
        .catch(err=>{
            View.showError(err)
        })
    }

    static updateData(editedColumn, newValueAtColumn, id){
        let objTeacher = {}
        objTeacher[editedColumn] = newValueAtColumn
        Model.Teacher.update(objTeacher,{where:{id : id}})
        .then(()=>{
            View.showSuccess(`data with id ${id} successfuly update`)
        })
        .catch(err=>{
            View.showError(err)
        })
    }

}

module.exports = TeacherController