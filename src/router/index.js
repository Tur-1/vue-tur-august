import { createRouter, createWebHistory } from 'vue-router'


const mediaQueryWidth = window.matchMedia("(max-width: 756px)");


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => mediaQueryWidth.matches ? import('@/views/pages/HomePage/ui/mobile/MobileHomePage.vue') : import('@/views/pages/HomePage/ui/desktop/DesktopHomePage.vue')
    }

  ]
})

export default router
