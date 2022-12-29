<template>
  <Suspense>
    <template #default>
      <MobileMyAccountPage v-if="isMobile" />
    </template>

    <template #fallback>
      <MobileMyAccountPageSkeleton v-if="isMobile" />
    </template>
  </Suspense>

  <DesktopMyAccountPage v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";

import MobileMyAccountPage from "@/pages/MyAccountPage/views/mobile/MobileMyAccountPage.vue";
import DesktopMyAccountPage from "@/pages/MyAccountPage/views/desktop/DesktopMyAccountPage.vue";
import MobileMyAccountPageSkeleton from "@/pages/MyAccountPage/views/mobile/MobileMyAccountPageSkeleton.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
