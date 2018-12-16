class ControllerView {
    static showError(msg){
        console.log(`error detail : ${msg}`)
    }

    static showSuccess(data){
        console.log(data)
    }
}

module.exports = ControllerView