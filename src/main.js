import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue";
import TheBody from "./components/TheBody.vue";
import ContentBox from "./components/UI/ContentBox.vue";

const app = createApp(App);

app.component("content-box", ContentBox);
app.component("task-body", TheBody);
app.component("main-header", TheHeader);
app.mount("#app");
