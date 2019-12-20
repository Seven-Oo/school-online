import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Topnav from '@/components/index/Topnav'
import Carsouel from '@/components/index/Carsouel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '',
      name: 'Topnav',
      component: Topnav
    },
    {
      path: '',
      name: 'Carsouel',
      component: Carsouel
    }
  ]
})
