<script setup>
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
import ShopPageHeader from "@/pages/ShopPage/views/desktop/components/ShopPageHeader.vue";
import ShopPageSidebar from "@/pages/ShopPage/views/desktop/components/ShopPageSidebar/index.vue";
import ShopPageProducts from "@/pages/ShopPage/views/desktop/components/ShopPageProducts.vue";
import NoProductsFound from "@/pages/ShopPage/views/desktop/components/NoProductsFound.vue";
</script>
<template>
  <section class="container">
    <ShopPageHeader />
    <div class="row">
      <ShopPageSidebar />

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
  </section>
</template>
