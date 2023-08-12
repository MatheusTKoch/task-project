import { createApp } from "vue";

import router from "./router.js";
import store from "./index.js";
import App from "./App.vue";
import contentBox from "./components/UI/ContentBox.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAODn4GbFvB2cJ4Zndqu6C9ig-KGTtLOJw",
  authDomain: "task-project-d7290.firebaseapp.com",
  databaseURL: "https://task-project-d7290-default-rtdb.firebaseio.com",
  projectId: "task-project-d7290",
  storageBucket: "task-project-d7290.appspot.com",
  messagingSenderId: "396854264299",
  appId: "1:396854264299:web:1c3a1480a28526ca7e59ae"
  };

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.component("content-box", contentBox);
app.component("base-button", BaseButton);
app.use(store);
app.use(router);
app.mount("#app");
