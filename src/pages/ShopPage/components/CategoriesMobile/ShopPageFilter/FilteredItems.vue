<template>
  <div class="filtered-items-card" v-for="(item, index) in props.items">
    <span class="name">{{ item }}</span>
    <button type="button">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  items: Object,
});
</script>
