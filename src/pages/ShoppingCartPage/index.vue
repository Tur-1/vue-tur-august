<template>
  <MobileShoppingCartPage v-if="isMobile" />
  <DesktopShoppingCartPage v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";

import MobileShoppingCartPage from "@/pages/ShoppingCartPage/views/mobile/MobileShoppingCartPage.vue";
import DesktopShoppingCartPage from "@/pages/ShoppingCartPage/views/desktop/DesktopShoppingCartPage.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
