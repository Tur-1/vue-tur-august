<template>
  <MobileMyAccountPage v-if="isMobile" />
  <DesktopMyAccountPage v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";

import MobileMyAccountPage from "@/views/pages/MyAccountPage/ui/mobile/mobileMyAccountPage.vue";
import DesktopMyAccountPage from "@/views/pages/MyAccountPage/ui/desktop/DesktopMyAccountPage.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
