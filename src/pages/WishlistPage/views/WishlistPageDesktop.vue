<script setup>
import WishlistHeader from "@/pages/WishlistPage/components/WishlistHeader.vue";
import WishlistProducts from "@/pages/WishlistPage/components/WishlistProducts.vue";

import Breadcrumb from "@/components/Breadcrumb/index.vue";
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
