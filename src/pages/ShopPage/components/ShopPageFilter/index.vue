<script setup>
import Brands from "@/pages/ShopPage/components/ShopPageFilter/Brands.vue";
import Colors from "@/pages/ShopPage/components/ShopPageFilter/Colors.vue";
import SizeOptions from "@/pages/ShopPage/components/ShopPageFilter/SizeOptions.vue";
import FilterItem from "@/pages/ShopPage/components/ShopPageFilter/FilterItem.vue";
import useBottomSheet from "@/components/BottomSheet/useBottomSheet";
import BottomSheet from "@/components/BottomSheet/index.vue";

import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
import { useRoute, useRouter } from "vue-router";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import { watch } from "vue";
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

const getFilteredProducts = async () => {
  await getCategoryPageContent({
    categorySlug: route.params.slug,
    query: route.query,
  });
};
</script>

<template>
  <div class="col border-start">
    <button
      class="sort-filter-btns"
      @click="useBottomSheet.open('filter')"
      type="button"
      id="mobile-offcanvas-filter-btn"
    >
      <i class="bi bi-funnel-fill"></i><span>Filter</span>
    </button>
  </div>

  <BottomSheet id="filter">
    <template #header>
      <div class="mobile-filter-header">
        <span class="title">Filter</span>
        <button type="button" class="clear-filter-btn">clear All</button>
      </div>
    </template>
    <template #body>
      <FilterItem title="Brands">
        <Brands />
      </FilterItem>
      <FilterItem title="Colors">
        <Colors />
      </FilterItem>
      <FilterItem title="Size ">
        <SizeOptions />
      </FilterItem>
    </template>
    <template #footer>
      <button
        type="button"
        @click="getFilteredProducts"
        class="btn btn-primary show-products-btn"
      >
        show products ({{ ShopPageStore.products.pagination.total }})
      </button>
    </template>
  </BottomSheet>
</template>
