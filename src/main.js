import { createApp } from "vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import router from "./router.js";
import store from "./index.js";
import App from "./App.vue";
import contentBox from "./components/UI/ContentBox.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import firebase from "firebase";
import './index.css'

const firebaseConfig = {
  apiKey: import.meta.API_KEY,
  authDomain: import.meta.AUTH_DOMAIN,
  projectId: import.meta.PROJ_ID,
  storageBucket: import.meta.ST_BUCKET,
  messagingSenderId: import.meta.MSG_SENDER_ID,
  appId: import.meta.APP_ID
  };

const app = createApp(App);

firebase.initializeApp(firebaseConfig);
firebase.database();

app.component("content-box", contentBox);
app.component("base-button", BaseButton);
app.use(autoAnimatePlugin);
app.use(store);
app.use(router);
app.mount("#app");
