<template>
  <div class="mb-2">
    <label :for="id" class="form-input-label">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      class="form-input form-control"
      :class="class"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />

    <span class="text-danger mt-1 ms-2" style="font-size: 12px" v-show="error">
      {{ error }}
    </span>
  </div>
</template>
<script setup>
defineProps([
  "id",
  "type",
  "placeholder",
  "label",
  "error",
  "class",
  "modelValue",
]);
</script>
