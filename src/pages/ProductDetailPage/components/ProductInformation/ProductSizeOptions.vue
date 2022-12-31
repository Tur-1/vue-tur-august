<template>
  <div class="attr-size">
    <strong class="me-3">Size</strong>
    <ul class="size-filter">
      <li v-for="(size, index) in sizeOptions" :key="index">
        <input
          type="radio"
          name="size"
          :value="size.id"
          class="btn-check"
          :id="'size-' + size.id"
        />
        <!-- @change="ProductSize.getSizeId(size.id)" -->
        <label class="btn" :for="'size-' + size.id">{{ size.name }}</label>
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps(["sizeOptions"]);
</script>
