<script setup>
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
import ShopPageHeader from "@/views/pages/ShopPage/ui/desktop/components/ShopPageHeader.vue";
import ShopPageSidebar from "@/views/pages/ShopPage/ui/desktop/components/ShopPageSidebar/index.vue";
import ShopPageProducts from "@/views/pages/ShopPage/ui/desktop/components/ShopPageProducts.vue";
import NoProductsFound from "@/views/pages/ShopPage/ui/desktop/components/NoProductsFound.vue";
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
