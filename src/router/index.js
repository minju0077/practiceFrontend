import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/board',
      name: 'App',
      component: () => import('../App.vue'),
      children: [
        {
        path: 'register',
        name: 'board_register',
        component: () => import('../views/Board/Register.vue')
      },
      {
        path: 'list',
        name: 'board_list',
        component: () => import('../views/Board/List.vue')
      }
      ]
    }
  ],
})

export default router
