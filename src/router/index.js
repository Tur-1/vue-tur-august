import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage/views/index.vue'


import useRouterService from '@/router/useRouterService'
// import auth from '@/Middleware/auth'
// import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";


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
      component: () => import('@/pages/WishlistPage/views/index.vue'),
      meta: {

        title: 'wishlist',
      },
    },
    {
      path: '/shop/:slug',
      name: 'shop',
      component: () => import('@/pages/ShopPage/views/index.vue'),

      meta: {
        previousPage: '/categories',
        // hidePageTitle: true,
        title: '',

      }
    },
    {
      path: '/404',
      name: 'pageNotFound',
      component: () => import('@/pages/Errors/404.vue'),

    },
    // {
    //   path: '/my-account',
    //   name: 'myAccount',
    //   component: () => import('@/pages/MyAccountPage/views/index.vue'),
    //   meta: {
    //     requiresAuth: true,
    //     title: 'My Account',
    //   }
    // },

    // {
    //   path: '/categories',
    //   name: 'categories',
    //   component: () => import('@/pages/CategoriesPage/views/index.vue'),
    //   meta: {
    //     backgroundColor: '#f9f9f9',
    //     hidePageTitle: true,
    //     title: 'categories',

    //   }
    // },
    // {
    //   path: '/checkout',
    //   name: 'checkout',
    //   component: () => import('@/pages/CheckoutPage/views/index.vue'),
    //   meta: {
    //     backgroundColor: '#f9f9f9',
    //     previousPage: '/cart',
    //     requiresAuth: true,
    //     title: 'checkout',
    //   }
    // },
    {
      path: '/product-detail/:productSlug',
      name: 'productDetail',
      component: () => import('@/pages/ProductDetailPage/views/index.vue'),
      meta: {


      }
    },
    // {
    //   path: '/cart',
    //   name: 'shopping cart',
    //   component: () => import('@/pages/ShoppingCartPage/views/index.vue'),
    //   meta: {
    //     backgroundColor: '#f9f9f9',
    //     requiresAuth: true,
    //     title: 'shopping cart',
    //   }
    // },

  ]
});


router.beforeEach((to, from, next) =>
{

  // if (to.meta.requiresAuth)
  // {
  //   return auth({ to, from, next });
  // }

  useRouterService.setPageTitle(to.meta.title);

  useRouterService.setPageBackgroundColor(to.meta.backgroundColor);
  next();

})


export default router
