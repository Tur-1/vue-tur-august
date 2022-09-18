<script setup>
import WishlistProducts from "@/views/desktop/pages/DesktopWishlistPage/components/WishlistProducts.vue";
import WishlistHeader from "@/views/desktop/pages/DesktopWishlistPage/components/WishlistHeader.vue";
import Breadcrumb from "@/views/desktop/components/Breadcrumb/index.vue";
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
