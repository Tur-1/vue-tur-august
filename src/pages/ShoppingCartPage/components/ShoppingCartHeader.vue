<template>
  <div class="mt-5 mb-5">
    <div class="d-flex justify-content-center">
      <h3 class="text-uppercase">Shopping bag</h3>
    </div>
    <div class="text-center">
      <p class="text-uppercase">{{ CartCounter }} items</p>
    </div>
  </div>
</template>
<script setup>
import CartCounter from "@/pages/ShoppingCartPage/stores/CartCounter";
</script>
