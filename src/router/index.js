import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/pages/HomePage/index.vue'



import useRouterService from '@/router/RouterService'
import auth from '@/Middleware/auth'
import ShopPageStore from "@/views/pages/ShopPage/stores/ShopPageStore";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'august',
      }
    }, {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('@/views/pages/WishlistPage/index.vue'),
      meta: {
        requiresAuth: true,
        title: 'wishlist',
      }
    },
    {
      path: '/cart',
      name: 'shopping cart',
      component: () => import('@/views/pages/ShoppingCartPage/index.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        requiresAuth: true,
        title: 'shopping cart',
      }
    },
    {
      path: '/my-account',
      name: 'My Account',
      component: () => import('@/views/pages/MyAccountPage/index.vue'),
      meta: {
        requiresAuth: true,
        title: 'My Account',
      }
    },
    {
      path: '/shop/:categorySlug',
      name: 'shop',
      component: () => import('@/views/pages/ShopPage/index.vue'),
      meta: {
        previousPage: '/categories',
        hidePageTitle: true,
        title: '',

      }
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/pages/CategoriesPage/index.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        hidePageTitle: true,
        title: 'categories',

      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/pages/CheckoutPage/index.vue'),
      meta: {
        backgroundColor: '#f9f9f9',
        previousPage: '/cart',
        requiresAuth: true,
        title: 'checkout',
      }
    },
    {
      path: '/product-detail',
      name: 'Product Detail',
      component: () => import('@/views/pages/ProductDetailPage/index.vue'),

    }

  ]
})


router.beforeEach((to, from, next) =>
{

  if (to.meta.requiresAuth)
  {
    return auth({ to, from, next });
  }

  useRouterService.setPageTitle(to.meta.title);

  useRouterService.setPageBackgroundColor(to.meta.backgroundColor);
  next();

})


export default router
