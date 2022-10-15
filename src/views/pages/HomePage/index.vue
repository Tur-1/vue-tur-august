<template>
  <MobileHomePage v-if="isMobile" />
  <DesktopHomePage v-if="isDesktop" />
</template>

<script setup>
import MobileHomePage from "@/views/pages/HomePage/ui/mobile/MobileHomePage.vue";
import DesktopHomePage from "@/views/pages/HomePage/ui/desktop/DesktopHomePage.vue";
import { ref } from "vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
