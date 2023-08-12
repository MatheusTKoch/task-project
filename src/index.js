import { createStore } from "vuex";

import task from "./components/data/tasks/index.js";

const store = createStore({
  modules: {
    task: task,
  },
});

export default store;
