<template>
  <ShopPageDesktop v-if="isDesktop" />
  <ShopPageMobile v-if="isMobile" />
</template>

<script setup>
import { ref } from "vue";
import ShopPageDesktop from "@/pages/ShopPage/views/ShopPageDesktop.vue";
import ShopPageMobile from "@/pages/ShopPage/views/ShopPageMobile.vue";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import { onMounted } from "vue";
import useRouterService from "@/router/useRouterService";
import { useRoute } from "vue-router";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}

const { getCategoryPageContent } = useShopPageService();
const route = useRoute();
onMounted(async () => {
  await getCategoryPageContent({ categorySlug: route.params.slug });

  useRouterService.setPageTitle(ShopPageStore.category.name);
});
</script>
