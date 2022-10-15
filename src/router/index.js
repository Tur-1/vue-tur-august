import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/pages/HomePage/index.vue'

import WishlistPage from '@/views/pages/WishlistPage/index.vue'

import ShoppingCartPage from '@/views/pages/ShoppingCartPage/index.vue'

import MyAccountPage from '@/views/pages/MyAccountPage/index.vue'

import CategoriesPage from '@/views/pages/CategoriesPage/index.vue'

import ShopPage from '@/views/pages/ShopPage/index.vue'

import CheckoutPage from '@/views/pages/CheckoutPage/index.vue'

import ProductDetailPage from '@/views/pages/ProductDetailPage/index.vue'

import authModal from "@/views/Auth/store/authModal";

import useAuthApi from '@/views/Auth/services/useAuthApi';
import authState from '@/views/Auth/store/authState'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage, meta: {
        requiresAuth: false,
      }

    }, {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistPage,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/cart',
      name: 'shopping cart',
      component: ShoppingCartPage,
      meta: {
        backgroundColor: '#f9f9f9',
        requiresAuth: true,
      }
    },
    {
      path: '/my-account',
      name: 'My Account',
      component: MyAccountPage,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage,
      meta: {
        previousPage: '/categories',
        hidePageTitle: true,
        requiresAuth: false,
      }
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesPage,
      meta: {
        backgroundColor: '#f9f9f9',
        hidePageTitle: true,
        requiresAuth: false,
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage,
      meta: {
        backgroundColor: '#f9f9f9',
        previousPage: '/cart',
        requiresAuth: true,
      }
    },
    {
      path: '/product-detail/:slug',
      name: 'Product Detail',
      component: ProductDetailPage,
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: import('@/views/components/MobileAuth/index.vue')
    },

  ]
})
router.beforeEach(async (to, from, next) =>
{


  if (to.meta.requiresAuth)
  {

    if (await useAuthApi.isNotAuthenticated())
    {
      authModal.setIntendedPath(to.fullPath);
      authModal.openModal();
      return next(false);
    }

  }

  let title = to.name == 'home' ? '' : ` - ${ to.params.title ?? to.name }`.toString().toUpperCase();
  document.title = import.meta.env.VITE_APP_NAME + title;
  document.body.style.backgroundColor = to.meta.backgroundColor;


  next();

})


export default router
