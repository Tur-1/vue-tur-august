<template>
  <div class="row mt-3">
    <h5 class="section-title"><span>New</span> Arrivals</h5>
    <Slider>
      <ProductCard class="col-xl-2 col-lg-2 col-md-4 col-5" />
      <ProductCard class="col-xl-2 col-lg-2 col-md-4 col-5" />
      <ProductCard class="col-xl-2 col-lg-2 col-md-4 col-5" />
      <ProductCard class="col-xl-2 col-lg-2 col-md-4 col-5" />
    </Slider>
  </div>
</template>
<script setup>
import ProductCard from "@/views/components/ProductCard/index.vue";
import Slider from "@/views/components/Slider/index.vue";
</script>
