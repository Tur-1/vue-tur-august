<template>
  <div class="filtered-items-card" v-for="(item, index) in FilteredItems">
    <span class="name">{{ item }}</span>
    <button type="button">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
</template>
<script setup>
defineProps({
  FilteredItems: Array,
});
</script>
