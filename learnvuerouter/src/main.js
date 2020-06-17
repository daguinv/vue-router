import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.test = function(){
  console.log('Vue原型的方法');
  
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
