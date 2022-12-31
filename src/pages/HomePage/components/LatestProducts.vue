<template>
  <div class="row mt-3">
    <h5 class="section-title"><span>New</span> Arrivals</h5>
    <div class="base-slider">
      <ProductCard v-for="i in 20" class="col-xl-2 col-lg-2 col-md-4 col-5" />
    </div>
  </div>
</template>
<script setup>
import ProductCard from "@/components/ProductCard/index.vue";
</script>
