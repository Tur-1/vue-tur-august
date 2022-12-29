<template>
  <div class="page-spinner" v-show="spinnerStore.isShown">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script setup>
import spinnerStore from "@/views/components/PageSpinner/spinnerStore";
</script>
