<script setup>
import { RouterLink, RouterView } from "vue-router";

import { ref } from "vue";
import DesktopLayout from "@/views/desktop/layouts/DesktopLayout.vue";
import MobileLayout from "@/views/mobile/layouts/MobileLayout.vue";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>

<template>
  <DesktopLayout v-if="isDesktop">
    <RouterView />
  </DesktopLayout>

  <MobileLayout v-if="isMobile">
    <RouterView />
  </MobileLayout>
</template>
