import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './routes'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
