export default {
    setTasks(state, payload) {
        state.taskArray = payload;
    },
    registerTasks(state, payload) {
        state.taskArray.push(payload);
    },
  
}