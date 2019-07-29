import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

import Scroll from '@/components/Scroll'
import Loader from '@/components/Loader'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.component('Scroll',Scroll);
Vue.component('Loader',Loader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
