import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '@/views/Create'
import Task from '@/views/Task'
import Tasks from '@/views/Tasks'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  },

  {
    path: '/Task/:id',
    name: 'Taks',
    component: Task
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
