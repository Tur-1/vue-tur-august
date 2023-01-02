<template>
  <ShoppingCartMobileView v-if="isMobile" />
  <ShoppingCartDesktopView v-if="isDesktop" />
</template>

<script setup>
import { ref, onMounted } from "vue";

import ShoppingCartMobileView from "@/pages/ShoppingCartPage/views/ShoppingCartMobileView.vue";
import ShoppingCartDesktopView from "@/pages/ShoppingCartPage/views/ShoppingCartDesktopView.vue";
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}

const { getCartProducts } = useShoppingCartService();

onMounted(getCartProducts);
</script>
