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
import Breadcrumb from "@/views/desktop/components/Breadcrumb/index.vue";
import RelatedProducts from "@/views/desktop/pages/DesktopProductDetailPage/components/RelatedProducts/index.vue";
import ProductInformation from "@/views/desktop/pages/DesktopProductDetailPage/components/ProductInformation/index.vue";
import ProductImages from "@/views/desktop/pages/DesktopProductDetailPage/components/ProductImages/index.vue";
import Tabs from "@/views/desktop/pages/DesktopProductDetailPage/components/Tabs/index.vue";
</script>
