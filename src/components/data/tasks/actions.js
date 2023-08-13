import firebase from "firebase";

export default {
    async refreshTasks(context) {
        
      },
    async submitData(context, data) {
        const taskText = data.toString();
        const postTaskRef = firebase.database().ref('tasks');
        const newTaskRef = postTaskRef.push();
        newTaskRef.set({
            'taskText': taskText
        })
}
}
