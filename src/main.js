import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./plugins/vuetify-mask.js";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Vue.use(Toast);

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
