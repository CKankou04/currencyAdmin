import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

function loggedIn(){
    return localStorage.getItem('token')
}

app.use(router);

app.mount("#app");
