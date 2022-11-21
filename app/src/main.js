import {createApp} from 'vue'
import App from './App.vue'
import router from './config/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import i18n from './config/i18n'
import  "bootstrap/dist/js/bootstrap.bundle.min.js";
import BootstrapVue3 from 'bootstrap-vue-3'
// configure axios
axios.defaults.baseURL = 'http://localhost:8080/api'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'


const app =createApp(App);
app.use(router);
app.use(i18n);
app.use(BootstrapVue3);
app.use(VueAxios, axios);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js'
