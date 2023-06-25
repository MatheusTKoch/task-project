import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/Header.vue";
import TaskBody from "./components/Body.vue";
import ContentBox from "./components/UI/ContentBox.vue";

const app = createApp(App);

app.component("content-box", ContentBox);
app.component("task-body", TaskBody);
app.component("main-header", Header);
app.mount("#app");
