<template>
  <div class="mb-3 border-bottom">
    <div class="d-flex justify-content-center">
      <h3 class="text-uppercase">Wishlist</h3>
    </div>
    <div class="text-center">
      <p class="text-uppercase">{{ WishlistStore.counter }} items</p>
    </div>
  </div>
</template>
<script setup>
import WishlistStore from "@/pages/WishlistPage/stores/WishlistStore";
</script>
