import Vue from 'vue'
import VueRouter from 'vue-router'

// Invite Views
const InviteView = () => import('@/views/InviteView')

Vue.use(VueRouter)

const routes = [
  {
    path: '/invite',
    name: 'InviteView',
    component: InviteView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
