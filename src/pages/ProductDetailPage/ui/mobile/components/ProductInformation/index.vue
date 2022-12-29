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
import Brand from "@/pages/ProductDetailPage/views/mobile/components/ProductInformation/Brand.vue";
import Title from "@/pages/ProductDetailPage/views/mobile/components/ProductInformation/Title.vue";
import Price from "@/pages/ProductDetailPage/views/mobile/components/ProductInformation/Price.vue";
import QualityInfo from "@/pages/ProductDetailPage/views/mobile/components/ProductInformation/QualityInfo.vue";
import AddToCartButton from "@/pages/ProductDetailPage/views/mobile/components/ProductInformation/AddToCartButton.vue";
import AddToWshlistButton from "@/pages/ProductDetailPage/views/mobile/components/ProductInformation/AddToWshlistButton.vue";
import ProductSizeOptions from "@/pages/ProductDetailPage/views/mobile/components/ProductInformation/ProductSizeOptions.vue";
</script>
