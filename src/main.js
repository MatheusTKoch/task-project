import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue";
import TheBody from "./components/TheBody.vue";

const store = createStore({
    state() {
        return {
            taskArray: [],
            taskText: ""
        }
    },
    getters: {
        taskArray(state) {
            return state.taskArray;
        },
        taskText(state) {
            return state.taskText;
        }
    },
    mutations: {
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
            // then(this.$emit('someEvent')); 
            document.getElementById("insertField").value = "";
            console.log(this.taskArray)
          }
    },
    actions: {
        refreshTasks(context) {
            context.commit('refreshTasks');
        },
        submitData(context) {
            context.commit('submitData');
        }
    }
})

const app = createApp(App);

app.component("task-body", TheBody);
app.component("main-header", TheHeader);
app.use(store);
app.mount("#app");
