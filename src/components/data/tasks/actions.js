import firebase from "firebase";

export default {
  async refreshTasks(context) {
    const tasksRef = firebase.database().ref("tasks");
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
      userUID: currentUser,
    });
  },
  async deleteTask(context, data) {
    const dataText = data.taskText;
    function filterIndex(searchArray, key, searchValue) {
      for (var i = 0; i < searchArray.length; i++) {
        if (searchArray[i][key] == searchValue) {
          return i;
        }
      }
    }
    const ref = firebase.database().ref("/tasks/").on('value', function(snapshot) {
      const refIds = Object.keys(snapshot.val());
      const refTexts = snapshot.val();
      const textIndex = filterIndex(refTexts, "taskText", dataText.toString());
      // var removeRef = firebase.database().ref("/tasks/" + )
      // removeRef.remove().then(function() {
      //   console.log("Remove succeeded.")
      // })
      // .catch(function(error) {
      //   console.log("Remove failed: " + error.message)
      // });
      console.log(dataText)
      console.log(refIds.toString())
      console.log(refTexts)
      console.log(textIndex)
    })
    
  },
};
