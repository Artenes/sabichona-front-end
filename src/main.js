
import Vue from 'vue'
import router from './router'
import vueResource from 'vue-resource'
import store from './store'
import Lang from 'vuejs-localization'
import App from './templates/App'

Lang.requireAll(require.context('./lang', true, /\.js$/))

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(Lang, {default: 'en'})

new Vue({
  el: '#sabichona-app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
