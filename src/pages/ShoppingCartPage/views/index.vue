<template>
  <ShoppingCartMobileView v-if="isMobile" />
  <ShoppingCartDesktopView v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";

import ShoppingCartMobileView from "@/pages/ShoppingCartPage/views/ShoppingCartMobileView.vue";
import ShoppingCartDesktopView from "@/pages/ShoppingCartPage/views/ShoppingCartDesktopView.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
