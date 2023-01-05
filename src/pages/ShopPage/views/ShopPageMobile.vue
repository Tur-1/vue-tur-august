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

const { getCategoryPageContent } = useShopPageService();
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
      <NoProductsFound />
    </div>
  </section>
</template>
