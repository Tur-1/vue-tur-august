<template>
  <MobileCheckoutPage v-if="isMobile" />
  <DesktopCheckoutPage v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";
import MobileCheckoutPage from "@/views/pages/CheckoutPage/ui/mobile/MobileCheckoutPage.vue";
import DesktopCheckoutPage from "@/views/pages/CheckoutPage/ui/desktop/DesktopCheckoutPage.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
