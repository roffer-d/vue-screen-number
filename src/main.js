import Vue from 'vue'
import App from './App.vue'
import screenNumber from "./components/";
Vue.use(screenNumber)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
