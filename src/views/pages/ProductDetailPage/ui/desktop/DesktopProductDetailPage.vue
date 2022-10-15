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
import ProductImages from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductImages/index.vue";
import ProductInformation from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/index.vue";
import RelatedProducts from "@/views/pages/ProductDetailPage/ui/desktop/components/RelatedProducts/index.vue";
import Tabs from "@/views/pages/ProductDetailPage/ui/desktop/components/Tabs/index.vue";
</script>
