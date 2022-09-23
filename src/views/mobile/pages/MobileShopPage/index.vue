<script setup>
import ShopPageProducts from "@/views/mobile/pages/MobileShopPage/components/ShopPageProducts.vue";
import ShopPageHeader from "@/views/mobile/pages/MobileShopPage/components/ShopPageHeader.vue";
import Pagination from "@/views/mobile/components/Pagination/index.vue";
import NoProductsFound from "@/views/mobile/pages/MobileShopPage/components/NoProductsFound.vue";
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
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
            <div class="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
              <div class="row">
                <ProductCardSkeleton />
              </div>
            </div>
          </template>
        </Suspense>
        <NoProductsFound :show="false" />
      </div>
      <Pagination />
    </div>
  </section>
</template>
