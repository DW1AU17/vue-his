import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: 'fastReg/:id?',
        component: () => import('@/views/fastReg')
      }
    ]
  },
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
