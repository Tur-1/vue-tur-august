<template>
  <div class="attr-size">
    <strong class="me-3">Size</strong>
    <ul class="size-filter">
      <li v-for="(size, index) in ProductDetailStore.sizeOptions" :key="index">
        <input
          type="radio"
          name="size"
          :value="size.id"
          class="btn-check"
          :id="'size-' + size.id"
          @change="
            ProductDetailStore.selectSize({
              size_id: size.id,
              product_id: ProductDetailStore.product.id,
            })
          "
        />

        <label class="btn" :for="'size-' + size.id">{{ size.name }}</label>
      </li>
    </ul>
  </div>
</template>
<script setup>
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";
</script>
