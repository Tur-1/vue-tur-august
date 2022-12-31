<template>
  <section v-if="!ProductDetailStore.onProgress">
    <Breadcrumb
      :categories="ProductDetailStore.categories"
      :active="ProductDetailStore.product.name"
      v-if="isDesktop"
    />
    <div class="container product-detail-container">
      <div class="row justify-content-center">
        <ProductImages />

        <ProductInformation />
      </div>
      <div class="related-products-tabs">
        <ProductDetailTabs />
        <RelatedProducts />
      </div>
    </div>
  </section>

  <ProductDetailSkeleton v-if="ProductDetailStore.onProgress" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProductDetailSkeleton from "@/pages/ProductDetailPage/views/ProductDetailSkeleton.vue";
import useProductPageService from "@/pages/ProductDetailPage/services/useProductPageService";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";
import ProductImages from "@/pages/ProductDetailPage/components/ProductImages/index.vue";
import ProductInformation from "@/pages/ProductDetailPage/components/ProductInformation/index.vue";
import RelatedProducts from "@/pages/ProductDetailPage/components/RelatedProducts/index.vue";
import ProductDetailTabs from "@/pages/ProductDetailPage/components/ProductDetailTabs/index.vue";

let isDesktop = ref(true);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isDesktop.value = false;
}

const { getProductDetail } = useProductPageService();
onMounted(getProductDetail);
</script>
