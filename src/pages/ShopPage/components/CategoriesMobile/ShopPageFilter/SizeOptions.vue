<template>
  <div class="list-group">
    <label
      ><span class="ms-2">S (14)</span>
      <div class="filter-checkbox-input">
        <input
          class="form-check-input"
          type="checkbox"
          name="sizeOptions[]"
          id="size-1"
          value="s"
        /></div
    ></label>
  </div>
</template>

<script setup>
defineProps({
  filters: Object,
});
</script>
