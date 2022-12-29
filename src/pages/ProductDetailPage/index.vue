<template>
  <MobileProductDetailPage v-if="isMobile" />
  <DesktopProductDetailPage v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";
import MobileProductDetailPage from "@/pages/ProductDetailPage/views/mobile/MobileProductDetailPage.vue";
import DesktopProductDetailPage from "@/pages/ProductDetailPage/views/desktop/DesktopProductDetailPage.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
