<template>
  <div class="list-group">
    <label>
      <div class="d-flex align-items-center">
        <img
          src="https://august-images.s3.amazonaws.com/images/colors/1659933051-color_pink_web.webp"
          width="20"
          height="20"
          alt="Black"
        />
        <span class="ms-2"> Pink (4) </span>
      </div>
      <div class="filter-checkbox-input">
        <input
          class="form-check-input"
          type="checkbox"
          name="color[]"
          id="color-40"
          value="pink"
        />
      </div>
    </label>
  </div>
</template>
<script setup>
defineProps({
  filters: Object,
});
</script>
