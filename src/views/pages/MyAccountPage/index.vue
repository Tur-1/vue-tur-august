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

import MobileMyAccountPage from "@/views/pages/MyAccountPage/ui/mobile/MobileMyAccountPage.vue";
import DesktopMyAccountPage from "@/views/pages/MyAccountPage/ui/desktop/DesktopMyAccountPage.vue";
import MobileMyAccountPageSkeleton from "@/views/pages/MyAccountPage/ui/mobile/MobileMyAccountPageSkeleton.vue";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
