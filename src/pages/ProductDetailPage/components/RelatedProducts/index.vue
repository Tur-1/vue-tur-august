<template>
  <div class="related-products horizontal-section">
    <h5 class="section-title"><span>Related</span> Products</h5>
    <div class="base-slider">
      <ProductCard
        :products="ProductDetailStore.relatedProducts"
        class="col-xl-2 col-lg-2 col-md-4 col-5 mb-4"
      />
    </div>
  </div>
</template>
<script setup>
import ProductCard from "@/components/ProductCard/index.vue";
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";
</script>
