<script setup>
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
import ShopPageHeader from "@/views/pages/ShopPage/ui/mobile/components/ShopPageHeader.vue";
import ShopPageProducts from "@/views/pages/ShopPage/ui/mobile/components/ShopPageProducts.vue";
import NoProductsFound from "@/views/pages/ShopPage/ui/mobile/components/NoProductsFound.vue";
import MobilePagination from "@/views/components/MobilePagination/index.vue";
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
      <MobilePagination />
    </div>
  </section>
</template>
