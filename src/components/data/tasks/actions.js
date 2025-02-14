import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

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
    const tasksRef = ref(db, "tasks");
    onValue(tasksRef, (snapshot) => {
      const dataValue = snapshot.val();
      context.commit("setTasks", dataValue);
    });
  },

  async submitData(context, data) {
    const taskText = data.toString();
    if (taskText === '') {
      return;
    } else {
      const tasksRef = ref(db, "tasks");
      const newTaskRef = push(tasksRef);
      const currentUser = getAuth().currentUser;
      if (!currentUser) {
        console.error("Usuário não autenticado");
        return;
      }
      await set(newTaskRef, {
        taskText: taskText,
        userUID: currentUser.uid,
      });
    }
  },

  async deleteTask(context, data) {
    const dataText = data.toString();
    const taskRef = ref(db, "tasks/" + dataText);
    remove(taskRef)
      .then(() => {
        console.log("Remove succeeded.");
      })
      .catch((error) => {
        console.error("Remove failed: " + error.message);
      });
  }
};
