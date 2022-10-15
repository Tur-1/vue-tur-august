<template>
  <div class="col-xl-6 col-lg-6 col-md-6 product-deatil-information">
    <div class="product-detail-info">
      <Brand />
      <Title />
      <Price />
      <QualityInfo />
    </div>

    <div>
      <ProductSizeOptions />

      <div class="add-product-warp">
        <AddToCartButton />
        <AddToWshlistButton />
      </div>
    </div>
  </div>
</template>
<script setup>
import Brand from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/Brand.vue";
import Title from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/Title.vue";
import Price from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/Price.vue";
import QualityInfo from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/QualityInfo.vue";
import ProductSizeOptions from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/ProductSizeOptions.vue";
import AddToCartButton from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/AddToCartButton.vue";
import AddToWshlistButton from "@/views/pages/ProductDetailPage/ui/desktop/components/ProductInformation/AddToWshlistButton.vue";
</script>
