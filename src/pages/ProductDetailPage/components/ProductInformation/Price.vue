<template>
  <div class="product-price-wrap mt-3">
    <div class="product-detail-price">
      <div class="product-current-price W-50">
        <span>{{ price }} SAR</span
        ><!---->
      </div>
      <span class="discounted-product-price"></span>
    </div>
  </div>
</template>
<script setup>
defineProps(["price"]);
</script>
