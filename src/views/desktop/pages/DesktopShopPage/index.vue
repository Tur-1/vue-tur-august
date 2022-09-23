<script setup>
import ShopPageHeader from "@/views/desktop/pages/DesktopShopPage/components/ShopPageHeader.vue";
import ShopPageSidebar from "@/views/desktop/pages/DesktopShopPage/components/ShopPageSidebar/index.vue";
import ShopPageProducts from "@/views/desktop/pages/DesktopShopPage/components/ShopPageProducts.vue";
import NoProductsFound from "@/views/desktop/pages/DesktopShopPage/components/NoProductsFound.vue";
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
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
