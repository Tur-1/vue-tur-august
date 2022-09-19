import { createRouter, createWebHistory } from 'vue-router'

import DesktopHomePage from '@/views/desktop/pages/DesktopHomePage/index.vue'
import MobileHomePage from '@/views/mobile/pages/MobileHomePage/index.vue'

import MobileWishlistPage from '@/views/mobile/pages/MobileWishlistPage/index.vue'
import DesktopWishlistPage from '@/views/desktop/pages/DesktopWishlistPage/index.vue'

import MobileShoppingCartPage from '@/views/mobile/pages/MobileShoppingCartPage/index.vue'
import DesktopShoppingCartPage from '@/views/desktop/pages/DesktopShoppingCartPage/index.vue'

import MobileMyAccountPage from '@/views/mobile/pages/MobileMyAccountPage/index.vue'
import DesktopMyAccountPage from '@/views/desktop/pages/DesktopMyAccountPage/index.vue'

import MobileShopPage from '@/views/mobile/pages/MobileShopPage/index.vue'
import DesktopShopPage from '@/views/desktop/pages/DesktopShopPage/index.vue'

import MobileCheckoutPage from '@/views/mobile/pages/MobileCheckoutPage/index.vue'
import DesktopCheckoutPage from '@/views/desktop/pages/DesktopCheckoutPage/index.vue'

import MobileProductDetailPage from '@/views/mobile/pages/MobileProductDetailPage/index.vue'
import DesktopProductDetailPage from '@/views/desktop/pages/DesktopProductDetailPage/index.vue'


const isMobile = window.matchMedia("(max-width: 756px)").matches;


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: isMobile ? MobileHomePage : DesktopHomePage

    }, {
      path: '/wishlist',
      name: 'wishlist',
      component: isMobile ? MobileWishlistPage : DesktopWishlistPage
    },
    {
      path: '/cart',
      name: 'shopping cart',
      component: isMobile ? MobileShoppingCartPage : DesktopShoppingCartPage
    },
    {
      path: '/my-account',
      name: 'My Account',
      component: isMobile ? MobileMyAccountPage : DesktopMyAccountPage
    },
    {
      path: '/shop',
      name: 'shop',
      component: isMobile ? MobileShopPage : DesktopShopPage
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: isMobile ? MobileCheckoutPage : DesktopCheckoutPage
    },
    {
      path: '/product-detail/:slug',
      name: 'Product Detail',
      component: isMobile ? MobileProductDetailPage : DesktopProductDetailPage
    },
  ]
})
router.beforeEach((to, from, next) =>
{

  let title = to.name == 'home' ? '' : ` - ${ to.params.title ?? to.name }`.toString().toUpperCase();
  document.title = import.meta.env.VITE_APP_NAME + title;

  next();

})
export default router
