import { createRouter, createWebHistory } from 'vue-router'

import DesktopHomePage from '@/views/desktop/pages/DesktopHomePage/index.vue'
import DesktopWishlistPage from '@/views/desktop/pages/DesktopWishlistPage/index.vue'
import DesktopShoppingCartPage from '@/views/desktop/pages/DesktopShoppingCartPage/index.vue'
import DesktopMyAccountPage from '@/views/desktop/pages/DesktopMyAccountPage/index.vue'
import DesktopShopPage from '@/views/desktop/pages/DesktopShopPage/index.vue'
import DesktopCheckoutPage from '@/views/desktop/pages/DesktopCheckoutPage/index.vue'
import DesktopProductDetailPage from '@/views/desktop/pages/DesktopProductDetailPage/index.vue'


const mediaQueryWidth = window.matchMedia("(max-width: 756px)");


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DesktopHomePage
    }, {
      path: '/wishlist',
      name: 'wishlist',
      component: DesktopWishlistPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: DesktopShoppingCartPage
    },
    {
      path: '/my-account',
      name: 'myAccount',
      component: DesktopMyAccountPage
    },
    {
      path: '/shop',
      name: 'shopPage',
      component: DesktopShopPage
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: DesktopCheckoutPage
    },
    {
      path: '/product-detail',
      name: 'productDetail',
      component: DesktopProductDetailPage
    },
  ]
})

export default router
