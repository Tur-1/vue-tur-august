<template>
  <section>
    <Breadcrumb pageTitle="productDetail" />
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
import Breadcrumb from "@/views/components/Breadcrumb/index.vue";
import ProductImages from "@/pages/ProductDetailPage/views/desktop/components/ProductImages/index.vue";
import ProductInformation from "@/pages/ProductDetailPage/views/desktop/components/ProductInformation/index.vue";
import RelatedProducts from "@/pages/ProductDetailPage/views/desktop/components/RelatedProducts/index.vue";
import Tabs from "@/pages/ProductDetailPage/views/desktop/components/Tabs/index.vue";
</script>
