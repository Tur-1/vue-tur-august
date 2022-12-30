<template>
  <Suspense>
    <template #default>
      <ShopPageMobile v-if="isMobile" />
    </template>

    <template #fallback>
      <MobileShopPageSkeleton v-if="isMobile" />
    </template>
  </Suspense>

  <ShopPageDesktop v-if="isDesktop" />
</template>

<script setup>
import { ref } from "vue";
import ShopPageMobile from "@/pages/ShopPage/views/ShopPageMobile.vue";
import ShopPageDesktop from "@/pages/ShopPage/views/ShopPageDesktop.vue";
import MobileShopPageSkeleton from "@/pages/ShopPage/views/MobileShopPageSkeleton.vue";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>
