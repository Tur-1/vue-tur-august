<script setup>
defineEmits(["openModal"]);
</script>
<template>
  <div class="p-1 mb-4">
    <button
      @click="$emit('openModal', null)"
      class="border-0 bg-transparent d-flex align-items-center text-secondary"
    >
      <i class="bi bi-plus-circle me-2"></i
      ><span class="text-bold"> new address</span>
    </button>
  </div>
</template>
