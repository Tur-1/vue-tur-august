<template>
  <div class="placeholder-wave mb-3" v-if="HomePageStore.onProgress">
    <div class="placeholder bg-secondary"></div>
  </div>
</template>
<script setup>
import HomePageStore from "@/pages/HomePage/store/HomePageStore";
</script>
