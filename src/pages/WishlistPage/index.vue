<template>
  <MobileWishlistPage v-if="isMobile" />
  <DesktopWishlistPage v-if="isDesktop" />
</template>

<script setup>
import MobileWishlistPage from "@/pages/WishlistPage/views/mobile/MobileWishlistPage.vue";
import DesktopWishlistPage from "@/pages/WishlistPage/views/desktop/DesktopWishlistPage.vue";
import { ref } from "vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
