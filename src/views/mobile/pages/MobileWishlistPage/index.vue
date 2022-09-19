<script setup>
import WishlistProducts from "@/views/mobile/pages/MobileWishlistPage/components/WishlistProducts.vue";
import WishlistHeader from "@/views/mobile/pages/MobileWishlistPage/components/WishlistHeader.vue";
</script>
<template>
  <section>
    <Breadcrumb pageTitle="wishlist" />
    <div class="container">
      <WishlistHeader />
      <WishlistProducts />
    </div>
  </section>
</template>
