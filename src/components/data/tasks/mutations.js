export default {
    setTasks(state, payload) {
        state.taskArray = payload;
        console.log(state.taskArray)
    },
    registerTasks(state, payload) {
        state.taskArray.push(payload);
    },
  
}