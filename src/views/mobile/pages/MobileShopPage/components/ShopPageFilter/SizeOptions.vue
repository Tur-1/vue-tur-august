<template>
  <div class="list-group">
    <label
      ><span class="ms-2">S (14)</span>
      <div class="form-check-input-warp">
        <input
          class="form-check-input"
          type="checkbox"
          name="sizeOptions[]"
          id="size-1"
          value="s"
        /></div></label
    ><label
      ><span class="ms-2">XS (14)</span>
      <div class="form-check-input-warp">
        <input
          class="form-check-input"
          type="checkbox"
          name="sizeOptions[]"
          id="size-2"
          value="xs"
        /></div></label
    ><label
      ><span class="ms-2">M (8)</span>
      <div class="form-check-input-warp">
        <input
          class="form-check-input"
          type="checkbox"
          name="sizeOptions[]"
          id="size-3"
          value="m"
        /></div></label
    ><label
      ><span class="ms-2">L (4)</span>
      <div class="form-check-input-warp">
        <input
          class="form-check-input"
          type="checkbox"
          name="sizeOptions[]"
          id="size-4"
          value="l"
        /></div
    ></label>
  </div>
</template>

<script setup>
defineProps({
  filters: Object,
});
</script>
