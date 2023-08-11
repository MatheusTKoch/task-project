export default {
    refreshTasks() {
        this.isLoading = true;
        this.error = null;
        fetch("https://task-project-d7290-default-rtdb.firebaseio.com/tasks.json")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            this.isLoading = false;
            const task = [];
            for (const id in data) {
              task.splice(task.length, 0, {
                id: id,
                taskText: data[id].taskText,
              });
              this.taskArray = task;
            }
          })
          .catch((error) => {
            console.log(error);
            this.isLoading = false;
            this.error = 'Failed to load data - please try again later!';
          });
    },
    submitData() {
        fetch(
          "https://task-project-d7290-default-rtdb.firebaseio.com/tasks.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: this.id,
              taskText: this.taskText,
            }),
          }   
        )
        document.getElementById("insertField").value = "";
        console.log(this.taskArray)
      }
}