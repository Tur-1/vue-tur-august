import { createRouter, createWebHistory } from 'vue-router'
import HomePageDesktop from '@/views/desktop/pages/HomePageDesktop/index.vue'


const mediaQueryWidth = window.matchMedia("(max-width: 756px)");


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageDesktop
    }

  ]
})

export default router
