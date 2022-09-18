<template>
  <div class="base-modal-header">
    <button
      type="button"
      @click="$emit('closeModal')"
      class="base-modal-close-btn btn-close btn-close-white"
    ></button>
    <span class="base-modal-title" v-show="title">
      {{ title }}
    </span>
  </div>
</template>
<script setup>
const porps = defineProps(["title"]);
const emit = defineEmits(["closeModal"]);
</script>
