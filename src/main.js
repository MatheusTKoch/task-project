import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import TaskBody from "./components/Body.vue";

const app = createApp(App);

app.component("task-body", TaskBody);
app.component("main-header", Header);
app.mount("#app");
