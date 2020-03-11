import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../components/FrontPage.vue'

import Cities from '../components/Cities'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'FrontPage',
    component: FrontPage,
    meta: {
      title: 'Activityfy'
    },
  },
  {
    path: '/cities/:city',
    name: 'Cities',
    component: Cities,
    meta: {
      title: 'Göteborg - Activityfy'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router