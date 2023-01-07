<template>
  <div class="product-price-wrap mt-3">
    <div class="product-detail-price">
      <div class="product-current-price W-50">
        <span>{{ product.price }} SAR</span>
      </div>
      <div>
        <span
          class="discount-amount-badge me-3"
          v-show="product.discount_amount"
        >
          {{ product.discount_amount }}
        </span>
        <span class="discounted-product-price">
          {{ product.price_before_discount }} SAR
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps(["product"]);
</script>
