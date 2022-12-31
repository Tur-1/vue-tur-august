<template>
  <ShopPageDesktop v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";
import ShopPageDesktop from "@/pages/ShopPage/views/ShopPageDesktop.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
