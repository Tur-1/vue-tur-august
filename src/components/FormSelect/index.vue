<template>
  <div class="mb-3">
    <label :for="id" class="form-select-label">{{ label }}</label>

    <select
      class="form-select base-form-select"
      :class="class"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="id"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :selected="option == modelValue ? true : false"
      >
        {{ option }}
      </option>
    </select>
    <span class="text-danger mt-1 ms-2" style="font-size: 12px" v-show="error">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
defineProps(["modelValue", "id", "class", "label", "error", "options"]);
</script>
