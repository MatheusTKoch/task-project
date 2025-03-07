import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import router from "./src/router.js";
import store from "./src/index.js";
import App from "./src/App.vue";
import contentBox from "./src/components/UI/ContentBox.vue";
import BaseButton from "./src/components/UI/BaseButton.vue";
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";
import './src/index.css'; 

const firebaseConfig = {
  apiKey: "AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",
  authDomain: "taskproject-caf25.firebaseapp.com",
  projectId: "taskproject-caf25",
  storageBucket: "taskproject-caf25.firebasestorage.app",
  messagingSenderId: "1061401138693",
  appId: "1:1061401138693:web:03fc3339b03b4cb79eee6c",
  databaseURL: 'https://taskproject-caf25-default-rtdb.firebaseio.com/'
};

const app = createApp(App);

initializeApp(firebaseConfig);
getDatabase()

app.component("content-box", contentBox);
app.component("base-button", BaseButton);
app.use(autoAnimatePlugin);
app.use(store);
app.use(router);
app.mount("#app");
