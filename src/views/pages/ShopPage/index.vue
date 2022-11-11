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
import MobileShopPage from "@/views/pages/ShopPage/ui/mobile/MobileShopPage.vue";
import DesktopShopPage from "@/views/pages/ShopPage/ui/desktop/DesktopShopPage.vue";
import MobileShopPageSkeleton from "@/views/pages/ShopPage/ui/mobile/MobileShopPageSkeleton.vue";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
