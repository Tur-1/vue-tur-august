<template>
  <Suspense>
    <template #default>
      <MobileShopPage v-if="isMobile" />
    </template>

    <template #fallback>
      <MobileShopPageSkeleton v-if="isMobile" />
    </template>
  </Suspense>

  <DesktopShopPage v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";
import MobileShopPage from "@/pages/ShopPage/views/mobile/MobileShopPage.vue";
import DesktopShopPage from "@/pages/ShopPage/views/desktop/DesktopShopPage.vue";
import MobileShopPageSkeleton from "@/pages/ShopPage/views/mobile/MobileShopPageSkeleton.vue";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
