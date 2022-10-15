<template>
  <section>
    <div class="container product-detail-container">
      <div class="row justify-content-center">
        <ProductImages />

        <ProductInformation />
      </div>
      <div class="related-products-tabs">
        <Tabs />
        <RelatedProducts />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProductImages from "@/views/pages/ProductDetailPage/ui/mobile/components/ProductImages/index.vue";
import ProductInformation from "@/views/pages/ProductDetailPage/ui/mobile/components/ProductInformation/index.vue";
import RelatedProducts from "@/views/pages/ProductDetailPage/ui/mobile/components/RelatedProducts/index.vue";
</script>
