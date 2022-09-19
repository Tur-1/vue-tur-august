<script setup>
import ShopPageProductsSkeleton from "@/views/mobile/pages/MobileShopPage/components/ShopPageProductsSkeleton.vue";
import ShopPageProducts from "@/views/mobile/pages/MobileShopPage/components/ShopPageProducts.vue";
import ShopPageHeader from "@/views/mobile/pages/MobileShopPage/components/ShopPageHeader.vue";
import Pagination from "@/views/mobile/components/Pagination/index.vue";
import NoProductsFound from "@/views/mobile/pages/MobileShopPage/components/NoProductsFound.vue";
</script>

<template>
  <section class="shop-page-mobile-section">
    <ShopPageHeader />
    <div class="container">
      <div class="row">
        <Suspense>
          <template #default>
            <ShopPageProducts />
          </template>

          <template #fallback>
            <ShopPageProductsSkeleton />
          </template>
        </Suspense>
        <NoProductsFound :show="false" />
      </div>
      <Pagination />
    </div>
  </section>
</template>
