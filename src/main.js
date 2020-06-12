import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.scss'
import ECharts from 'vue-echarts'
import VueAMap from 'vue-amap'
import router from './router'
import api from '@/api'



window.document.title = '油烟监控大屏'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$userinfo = null

Vue.component('chart', ECharts)
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '6c2e9df42a7b49a6fbd6ac852b2dd87b'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



