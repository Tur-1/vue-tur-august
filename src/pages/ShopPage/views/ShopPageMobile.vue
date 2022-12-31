<script setup>
import ShopPageProducts from "@/pages/ShopPage/views/mobile/components/ShopPageProducts/index.vue";
import MobilePagination from "@/views/components/MobilePagination/index.vue";
import ShopPageFilter from "@/pages/ShopPage/views/mobile/components/ShopPageFilter/index.vue";
import SortProducts from "@/pages/ShopPage/views/mobile/components/SortProducts/index.vue";
import ShopPageCategories from "@/pages/ShopPage/views/mobile/components/ShopPageCategories/index.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";

import useRouterService from "@/router/useRouterService";

await useShopPageService();

useRouterService.setPageTitle(ShopPageStore.category.name);
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
        <ShopPageProducts />
      </div>
      <MobilePagination />
    </div>
  </section>
</template>
