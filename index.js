const command = process.argv.slice(2)
const TeacherController = require('./controllers/TeacherController')

switch (command[0]) {
    case `teacher`:
        switch (command[1]) {
            case `show`:
                TeacherController.readData()
                break;
            case `add`:
                let teacher_first = command[2]
                let teacher_last = command[3]
                let teacher_email = command[4]
                TeacherController.addData(teacher_first, teacher_last,teacher_email)
                break;
            case `delete`:
                let teacher_id = command[2]
                TeacherController.deleteData(teacher_id)
                break;
            case `update`:
                let teacher_column = command[2]
                let teacher_value = command[3]
                let teacher_edit_id = command[4]
                TeacherController.updateData(teacher_column,teacher_value,teacher_edit_id)
            default:
                break;
        }
        break;

    default:
        break;
}