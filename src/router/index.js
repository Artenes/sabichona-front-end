import Vue from 'vue'
import Router from 'vue-router'
import SearchKnowledge from '@/components/SearchKnowledge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchKnowledge',
      component: SearchKnowledge
    }
  ]
})
