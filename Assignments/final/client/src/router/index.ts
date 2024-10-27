import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import ErrorPage from '@/pages/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    {
      path: '/:catchAll(.*)',
      name: 'Not-Found',
      component: ErrorPage
    }
  ]
})

export default router
