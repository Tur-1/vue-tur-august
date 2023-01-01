<template>
  <div class="list-group">
    <label v-for="(color, index) in ShopPageStore.colors" :key="index">
      <div class="d-flex align-items-center">
        <img :src="color.image_url" width="20" height="20" alt="Black" />
        <span class="ms-2">{{ color.name }} ({{ color.products_count }})</span>
      </div>
      <div class="filter-checkbox-input">
        <input
          class="form-check-input"
          type="checkbox"
          name="color[]"
          :id="'color-' + color.id"
          :value="color.slug"
          v-model="ProductsFilterStore.color"
        />
      </div>
    </label>
  </div>
</template>
<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
</script>
