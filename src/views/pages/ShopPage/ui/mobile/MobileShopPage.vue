<script setup>
import ShopPageProducts from "@/views/pages/ShopPage/ui/mobile/components/ShopPageProducts/index.vue";
import MobilePagination from "@/views/components/MobilePagination/index.vue";
import ShopPageFilter from "@/views/pages/ShopPage/ui/mobile/components/ShopPageFilter/index.vue";
import SortProducts from "@/views/pages/ShopPage/ui/mobile/components/SortProducts/index.vue";
import ShopPageCategories from "@/views/pages/ShopPage/ui/mobile/components/ShopPageCategories/index.vue";
import useShopPageService from "@/views/pages/ShopPage/services/useShopPageService";
import ShopPageStore from "@/views/pages/ShopPage/stores/ShopPageStore";

import useRouterService from "@/router/RouterService";

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
