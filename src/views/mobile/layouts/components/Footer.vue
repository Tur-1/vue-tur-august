<script setup>
import { ref } from "vue";
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
          class="active-footer-item"
        >
          <i class="bi bi-house-door-fill"> </i>
          <span class="">Home</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-shopPage')">
        <Link :to="{ name: 'shop' }" id="footer-item-shopPage" class="">
          <i class="bi bi-grid"></i>
          <span>Categories</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-cartPage')">
        <Link
          :to="{ name: 'shopping cart' }"
          id="footer-item-cartPage"
          class=""
        >
          <i class="position-relative bi bi-bag">
            <span class="cart-counter">0</span>
          </i>
          <span>Cart</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-wishlistPage')">
        <Link :to="{ name: 'wishlist' }" id="footer-item-wishlistPage" class="">
          <i class="bi bi-heart"></i>
          <span>Wishlist</span>
        </Link>
      </li>
      <li class="footer-item" @click="addScale('#footer-item-myAccountPage')">
        <Link
          :to="{ name: 'My Account' }"
          class=""
          id="footer-item-myAccountPage"
        >
          <i class="bi bi-person-circle"></i>
          <span>My Account</span>
        </Link>
      </li>
    </ul>
  </footer>
</template>
