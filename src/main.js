import { createApp } from "vue";


import router from "./router.js";
import store from "./index.js";
import App from "./App.vue";
import contentBox from "./components/UI/ContentBox.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import firebase from "firebase";

const firebaseConfig = {
  
  };

const app = createApp(App);

firebase.initializeApp(firebaseConfig);

firebase.database();



app.component("content-box", contentBox);
app.component("base-button", BaseButton);
app.use(store);
app.use(router);
app.mount("#app");
