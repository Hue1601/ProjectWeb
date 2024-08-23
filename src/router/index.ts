import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/webchat',
      name: 'webchat',
      component: () => import('../views/chat/WebChat.vue')
    }
    ,
    {
      path: '/user',
      name: 'user-list',
      component: () => import('../views/user/ListUser.vue')
    },
    {
      path: '/user/add',
      name: 'user-add',
      component: () => import('../views/user/AddUser.vue')
    },
    {
      path: '/user/update/:id',
      name: 'user-update',
      component: () => import('../views/user/UpdateUser.vue')
    },
  ]
})

export default router
