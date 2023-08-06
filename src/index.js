import { createStore } from "vuex";

import taskModule from "./components/data/tasks/index.js";
import userModule from "./components/data/user/index.js";

const store = createStore({
  modules: {
    task: taskModule,
    user: userModule
  },
});

export default store;
