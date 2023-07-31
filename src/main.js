import { createApp } from "vue";

import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue";
import TheBody from "./components/TheBody.vue";


const app = createApp(App);

app.component("task-body", TheBody);
app.component("main-header", TheHeader);
app.use(store);
app.mount("#app");
