<template>
  <div
    class="row d-flex justify-content-center"
    v-if="!WishlistStore.onProgress"
  >
    <ProductCard
      :products="WishlistStore.products"
      class="col-xl-2 col-lg-2 col-md-4 col-5"
    />
  </div>

  <div class="row" v-if="WishlistStore.onProgress">
    <ProductCardSkeleton />
  </div>
</template>

<script setup>
import ProductCard from "@/components/ProductCard/index.vue";
import WishlistStore from "@/pages/WishlistPage/stores/WishlistStore";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton.vue";
</script>
