import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import {store} from './store/index';
import ArgonDashboard from './plugins/argon-dashboard'
import {ID_COOKIE, ID_COOKIE_ENCRY, KEY} from "./constants/Constants";
var VueCookie = require('vue-cookie');
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(ArgonDashboard)
Vue.use(VueCookie);

new Vue({
  router,
  store,
  created() {
    if(this.$cookie.get(ID_COOKIE) && this.$cookie.get(ID_COOKIE_ENCRY)){
      var CryptoJS = require("crypto-js");
      var bytes = CryptoJS.AES.decrypt(this.$cookie.get(ID_COOKIE_ENCRY).toString(), KEY);
      var plaintext = bytes.toString(CryptoJS.enc.Utf8);
      var data = JSON.parse(plaintext);
      this.$store.commit('setId', data.id);
      this.$store.commit('setNombre', data.nombre);
      this.$store.commit('setGrupo', data.grupo);
      this.$store.commit('setTipo', data.tipo);
    }
  },
  render: h => h(App)
}).$mount('#app');

