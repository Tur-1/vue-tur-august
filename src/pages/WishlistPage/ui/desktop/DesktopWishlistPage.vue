<script setup>
import WishlistHeader from "@/pages/WishlistPage/views/desktop/components/WishlistHeader.vue";
import WishlistProducts from "@/pages/WishlistPage/views/desktop/components/WishlistProducts.vue";
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
import Breadcrumb from "@/views/components/Breadcrumb/index.vue";
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
