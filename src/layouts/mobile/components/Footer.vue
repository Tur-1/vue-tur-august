<script setup>
import { useRoute, useRouter } from "vue-router";
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
import CartCounter from "@/pages/ShoppingCartPage/stores/CartCounter";

const route = useRoute();
const router = useRouter();

const addScale = (id) => {
  $(id).addClass("scaleFooterItem");
  setTimeout(() => {
    $(id).removeClass("scaleFooterItem");
  }, 100);
};

const { getCartCount } = useShoppingCartService();
router.afterEach(async () => {
  await getCartCount();
});
</script>
<template>
  <footer id="mobile-footer" class="footer safari">
    <ul class="footer-items">
      <li class="footer-item" @click="addScale('#footer-item-homePage')">
        <Link
          :to="{ name: 'home' }"
          id="footer-item-homePage"
          :class="{ 'active-footer-item': route.name == 'home' }"
        >
          <i
            :class="
              route.name == 'home'
                ? 'bi bi-house-door-fill'
                : 'bi bi-house-door'
            "
          >
          </i>
          <span class="">Home</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-shopPage')">
        <Link
          :to="{ name: 'categories' }"
          id="footer-item-shopPage"
          :class="{ 'active-footer-item': route.name == 'categories' }"
        >
          <i
            :class="
              route.name == 'categories' ? 'bi bi-grid-fill' : 'bi bi-grid'
            "
          ></i>
          <span>Categories</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-cartPage')">
        <Link
          :to="{ name: 'shoppingCart' }"
          id="footer-item-cartPage"
          :class="{ 'active-footer-item': route.name == 'shoppingCart' }"
        >
          <i
            class="position-relative"
            :class="
              route.name == 'shoppingCart' ? 'bi bi-bag-fill' : 'bi bi-bag'
            "
          >
            <span class="cart-counter">{{ CartCounter }}</span>
          </i>
          <span>Cart</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-wishlistPage')">
        <Link
          :to="{ name: 'wishlist' }"
          id="footer-item-wishlistPage"
          :class="{ 'active-footer-item': route.name == 'wishlist' }"
        >
          <i
            :class="
              route.name == 'wishlist' ? 'bi bi-heart-fill' : 'bi bi-heart'
            "
          ></i>
          <span>Wishlist</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-myAccountPage')">
        <Link
          :to="{ name: 'myAccount' }"
          :class="{ 'active-footer-item': route.name == 'myAccount' }"
          id="footer-item-myAccountPage"
        >
          <i class="bi bi-person-circle"></i>
          <span>My Account</span>
        </Link>
      </li>
    </ul>
  </footer>
</template>
