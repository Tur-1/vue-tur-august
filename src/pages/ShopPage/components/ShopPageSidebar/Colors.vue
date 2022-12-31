<template>
  <label class="fw-600 mb-1 sidebar-border-top">Colors</label>
  <div class="list-group">
    <label
      v-for="(color, index) in ShopPageStore.colors"
      :key="index"
      class="d-flex align-items-center justify-content-between mb-2"
    >
      <div>
        <input
          class="form-check-input me-1"
          type="checkbox"
          name="color[]"
          :id="'color-' + color.id"
          :value="color.slug"
        />
        <span>{{ color.name }} ({{ color.products_count }})</span>
      </div>
      <img :src="color.image_url" width="20" alt="Black" />
    </label>
  </div>
</template>
<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";

defineProps({
  filters: Object,
});
</script>
