import { getDatabase } from "@firebase/database";
const db = getDatabase();

export default {
  async refreshTasks(context) {
    const tasksRef = db.ref("tasks");
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
      const postTaskRef = db.ref("tasks");
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
    const ref = db.ref("/tasks/").on('value', function(snapshot) {
      const removeRef = db.ref("/tasks/" + dataText)
      removeRef.remove().then(function() {
        console.log("Remove succeeded.")
      })
      .catch(function(error) {
        console.log("Remove failed: " + error.message)
      });
    })
    
  },
};
