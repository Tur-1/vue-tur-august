<script setup>
import WishlistProducts from "@/views/desktop/pages/DesktopWishlistPage/components/WishlistProducts.vue";
import WishlistHeader from "@/views/desktop/pages/DesktopWishlistPage/components/WishlistHeader.vue";
import Breadcrumb from "@/views/desktop/components/Breadcrumb/index.vue";
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
</script>
<template>
  <section>
    <Breadcrumb pageTitle="wishlist" />
    <div class="container">
      <WishlistHeader />

      <Suspense>
        <template #default>
          <WishlistProducts />
        </template>

        <template #fallback>
          <div class="row">
            <ProductCardSkeleton />
          </div>
        </template>
      </Suspense>
    </div>
  </section>
</template>
