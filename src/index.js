import { createStore } from "vuex";

import taskModule from "./components/data/tasks/index.js";

const store = createStore({
  modules: {
    task: taskModule,
  },
});

export default store;
