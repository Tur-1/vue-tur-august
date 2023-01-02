<template>
  <MobileMyAccountPage v-if="isMobile" />

  <DesktopMyAccountPage v-if="isDesktop" />
</template>

<script setup>
import { ref, onMounted } from "vue";

import MobileMyAccountPage from "@/pages/MyAccountPage/views/mobile/MobileMyAccountPage.vue";
import DesktopMyAccountPage from "@/pages/MyAccountPage/views/desktop/DesktopMyAccountPage.vue";
// import MobileMyAccountPageSkeleton from "@/pages/MyAccountPage/views/mobile/MobileMyAccountPageSkeleton.vue";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}

const { getAccountPageContent } = useMyAccountService();

onMounted(getAccountPageContent);
</script>
