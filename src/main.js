import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
var VueCookie = require('vue-cookie');

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(ArgonDashboard)
Vue.use(VueCookie);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
