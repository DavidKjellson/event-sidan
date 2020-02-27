import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '../components/FrontPage.vue'
// import HelloWorld from '../components/HelloWorld.vue'

import Cities from '../components/Cities'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'FrontPage',
  component: FrontPage,
  meta: {
    title: 'Eventsidan'
  },
},
// {
//   path: '/cities',
//   name: 'HelloWorld',
//   component: HelloWorld
// },
{
  path: '/cities',
  name: 'Cities',
  component: Cities
}
]

const router = new VueRouter({
  routes
})

export default router