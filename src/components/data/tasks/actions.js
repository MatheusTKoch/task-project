import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",
  authDomain: "taskproject-caf25.firebaseapp.com",
  projectId: "taskproject-caf25",
  storageBucket: "taskproject-caf25.firebasestorage.app",
  messagingSenderId: "1061401138693",
  appId: "1:1061401138693:web:03fc3339b03b4cb79eee6c",
  databaseURL: 'https://taskproject-caf25-default-rtdb.firebaseio.com/'
};

initializeApp(firebaseConfig);
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
