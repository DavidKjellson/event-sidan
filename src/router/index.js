import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../components/FrontPage.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'FrontPage',
    component: FrontPage,
    meta: {
      title: 'Eventsidan'
    },
  },
  {
    path: '/cities',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = new VueRouter({
  routes
})

export default router