<template>
  <div class="list-group">
    <label
      class="mb-2"
      v-for="(size, index) in ShopPageStore.sizeOptions"
      :key="index"
    >
      <span class="ms-2"> {{ size.name }} ({{ size.products_count }}) </span>

      <div class="filter-checkbox-input">
        <input
          class="form-check-input"
          type="checkbox"
          name="size[]"
          :id="'size-' + size.id"
          :value="size.slug"
          v-model="ProductsFilterStore.size"
        />
      </div>
    </label>
  </div>
</template>

<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
</script>
