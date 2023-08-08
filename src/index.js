import { createStore } from "vuex";

import task from "./components/data/tasks/index.js";
import user from "./components/data/user/index.js";

const store = createStore({
  modules: {
    task,
    user
  },
});

export default store;
