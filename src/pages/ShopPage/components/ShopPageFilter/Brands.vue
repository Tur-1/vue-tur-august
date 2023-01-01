<template>
  <div class="list-group">
    <label v-for="(brand, index) in ShopPageStore.brands" :key="index">
      <span class="ms-2"> {{ brand.name }} ({{ brand.products_count }})</span>
      <div class="filter-checkbox-input">
        <input
          class="form-check-input"
          type="checkbox"
          name="brand[]"
          :id="'brand-' + brand.id"
          :value="brand.slug"
          v-model="ProductsFilterStore.brand"
        />
      </div>
    </label>
  </div>
</template>
<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
</script>
