<script setup>
import ShopPageFilter from "@/pages/ShopPage/components/ShopPageFilter/index.vue";
import SortProducts from "@/pages/ShopPage/components/SortProducts/index.vue";
import ShopPageCategories from "@/pages/ShopPage/components/ShopPageCategories/index.vue";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton.vue";
import ProductCard from "@/components/ProductCard/index.vue";
import MobilePagination from "@/components/MobilePagination/index.vue";
import NoProductsFound from "@/pages/ShopPage/components/NoProductsFound/index.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";

const { getCategoryPageContent } = useShopPageService();
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
        sort: value.sort,
      },
    });
  },
  { deep: true }
);

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

<template>
  <section class="shop-page-mobile-section">
    <div class="mobile-shop-page-header">
      <SortProducts />

      <ShopPageFilter />
    </div>
    <div class="mobile-header-categories-warp">
      <ShopPageCategories />
    </div>
    <div class="container">
      <div class="row">
        <ProductCard
          :products="ShopPageStore.products.list"
          v-if="!ShopPageStore.onProgress"
        />
        <ProductCardSkeleton v-if="ShopPageStore.onProgress" />
      </div>
      <MobilePagination
        :pagination="ShopPageStore.mobilePagination"
        @onPageChange="getCategoryPageContent"
      />
      <NoProductsFound :show="ShopPageStore.products?.list?.length == 0" />
    </div>
  </section>
</template>
