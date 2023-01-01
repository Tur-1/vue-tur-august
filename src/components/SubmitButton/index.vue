<script setup>
import SubmitSpinner from "@/components/SubmitSpinner/index.vue";

const props = defineProps(["onProgress", "title", "class"]);
</script>
<template>
  <button type="submit" class="btn btn-primary" :class="class">
    <span :class="{ 'me-3': onProgress }">{{ title }}</span>

    <SubmitSpinner :onProgress="onProgress" />
  </button>
</template>
