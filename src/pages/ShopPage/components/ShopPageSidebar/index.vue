<template>
  <div class="shop-sidebar">
    <Categories />
    <Brands />
    <Colors />
    <SizeOptions />
  </div>
</template>

<script setup>
import Colors from "@/pages/ShopPage/components/ShopPageSidebar/Colors.vue";
import Brands from "@/pages/ShopPage/components/ShopPageSidebar/Brands.vue";
import Categories from "@/pages/ShopPage/components/ShopPageSidebar/Categories.vue";
import SizeOptions from "@/pages/ShopPage/components/ShopPageSidebar/SizeOptions.vue";
import { watch } from "vue";

import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
import { useRoute, useRouter } from "vue-router";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
const router = useRouter();
const route = useRoute();
watch(
  () => ProductsFilterStore,
  async (value) => {
    router.push({
      query: {
        "color[]": value.color,
        "brand[]": value.brand,
        "size[]": value.size,
      },
    });
  },
  { deep: true }
);
const { getCategoryPageContent } = useShopPageService();
watch(
  () => route.query,
  async (value) => {
    if (value) {
      await getCategoryPageContent({
        categorySlug: route.params.slug,
        query: value,
      });
    }
  }
);
</script>
