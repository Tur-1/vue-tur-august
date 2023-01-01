<template>
  <label class="fw-600 mb-1 sidebar-border-top">Size</label>
  <div class="list-group">
    <label
      class="mb-2"
      v-for="(size, index) in ShopPageStore.sizeOptions"
      :key="index"
    >
      <input
        class="form-check-input me-1"
        type="checkbox"
        name="size[]"
        :id="'size-' + size.id"
        :value="size.slug"
        v-model="ProductsFilterStore.size"
      />
      <span> {{ size.name }} ({{ size.products_count }}) </span>
    </label>
  </div>
</template>

<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
</script>
