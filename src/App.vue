<script setup>
import Toast from "@/components/Toast/index.vue";

import DesktopLayout from "@/layouts/desktop/DesktopLayout.vue";
import MobileLayout from "@/layouts/mobile/MobileLayout.vue";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ref } from "vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>

<template>
  <DesktopLayout v-if="isDesktop" />
  <MobileLayout v-if="isMobile" />

  <LoadingSpinner />
  <Toast />
</template>
