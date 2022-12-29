<template>
  <HomePageMobile v-if="isMobile" />
  <HomePageDesktop v-if="isDesktop" />
</template>

<script setup>
import HomePageMobile from "@/pages/HomePage/views/mobile/HomePageMobile.vue";
import HomePageDesktop from "@/pages/HomePage/views/desktop/HomePageDesktop.vue";
import { ref } from "vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
