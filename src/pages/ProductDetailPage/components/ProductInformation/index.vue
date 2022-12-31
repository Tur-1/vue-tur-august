<template>
  <div class="col-xl-6 col-lg-6 col-md-6 product-deatil-information">
    <div class="product-detail-info">
      <Brand
        :brand="{
          name: ProductDetailStore.product.brand_name,
          image: ProductDetailStore.product.brand_image,
        }"
      />
      <Title :price="ProductDetailStore.product.name" />
      <Price :price="ProductDetailStore.product.price" />
      <QualityInfo />
    </div>

    <div>
      <ProductSizeOptions :sizeOptions="ProductDetailStore.sizeOptions" />

      <div class="add-product-warp">
        <AddToCartButton />
        <AddToWshlistButton />
      </div>
    </div>
  </div>
</template>
<script setup>
import Brand from "@/pages/ProductDetailPage/components/ProductInformation/Brand.vue";
import Title from "@/pages/ProductDetailPage/components/ProductInformation/Title.vue";
import Price from "@/pages/ProductDetailPage/components/ProductInformation/Price.vue";
import QualityInfo from "@/pages/ProductDetailPage/components/ProductInformation/QualityInfo.vue";
import ProductSizeOptions from "@/pages/ProductDetailPage/components/ProductInformation/ProductSizeOptions.vue";
import AddToCartButton from "@/pages/ProductDetailPage/components/ProductInformation/AddToCartButton.vue";
import AddToWshlistButton from "@/pages/ProductDetailPage/components/ProductInformation/AddToWshlistButton.vue";
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";
</script>
