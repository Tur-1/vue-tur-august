<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const addScale = (id) => {
  $(id).addClass("scaleFooterItem");
  setTimeout(() => {
    $(id).removeClass("scaleFooterItem");
  }, 100);
};
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
          :to="{ name: 'shopping cart' }"
          id="footer-item-cartPage"
          :class="{ 'active-footer-item': route.name == 'shopping cart' }"
        >
          <i
            class="position-relative"
            :class="
              route.name == 'shopping cart' ? 'bi bi-bag-fill' : 'bi bi-bag'
            "
          >
            <span class="cart-counter">0</span>
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
          :to="{ name: 'My Account' }"
          :class="{ 'active-footer-item': route.name == 'My Account' }"
          id="footer-item-myAccountPage"
        >
          <i class="bi bi-person-circle"></i>
          <span>My Account</span>
        </Link>
      </li>
    </ul>
  </footer>
</template>
