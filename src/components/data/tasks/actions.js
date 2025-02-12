import { getDatabase } from "@firebase/database";

export default {
  async refreshTasks(context) {
    const tasksRef = getDatabase().ref("tasks");
    tasksRef.on("value", (data) => {
      const dataValue = data.val();
      context.commit("setTasks", dataValue);
    });
  },
  async submitData(context, data) {
    const taskText = data.toString();
    if (taskText === '') {
      return;
    } else {
      const postTaskRef = getDatabase().ref("tasks");
      const newTaskRef = postTaskRef.push();
      const currentUser = firebase.auth().currentUser.uid;
       newTaskRef.set({
        taskText: taskText,
        userUID: currentUser,
      });
    } 
  },
  async deleteTask(context, data) {
    const dataText = data.toString();
    const ref = getDatabase().ref("/tasks/").on('value', function(snapshot) {
      const removeRef = getDatabase().ref("/tasks/" + dataText)
      removeRef.remove().then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    })
    
  },
};
