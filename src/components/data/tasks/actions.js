import firebase from "firebase";

export default {
  async refreshTasks(context) {
    const tasksRef = firebase.database().ref("tasks/");
    tasksRef.on("value", (data) => {
      const dataValue = data.val();
      context.commit("setTasks", dataValue);
    });
  },
  async submitData(context, data) {
    const taskText = data.toString();
    const postTaskRef = firebase.database().ref("tasks");
    const newTaskRef = postTaskRef.push();
    const currentUser = firebase.auth().currentUser.uid;
    newTaskRef.set({
      taskText: taskText,
      userUID: currentUser
    });
  },
  async deleteTask(context, data) {
    const taskRemoved = data;
    const deleteTaskRef = firebase.database();
    deleteTaskRef.remove(taskRemoved);
    
  }
};
