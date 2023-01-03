<template>
  <div class="text-start mt-2">
    <p class="text-uppercase">{{ WishlistStore.products.length }} items</p>
  </div>
</template>
<script setup>
import WishlistStore from "@/pages/WishlistPage/stores/WishlistStore";
</script>
