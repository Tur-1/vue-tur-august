<template>
  <div class="base-bottom-offcanvas" :class="{ show: offcanvas.isOpen }">
    <div class="base-bottom-offcanvas-header">
      <button
        type="button"
        class="border-0 bg-transparent text-dark"
        @click="offcanvas.open(false)"
      >
        <i class="bi bi-chevron-down"></i>
      </button>
      <div class="title">
        <h5>{{ title }}</h5>
      </div>
      <div></div>
    </div>
    <div class="base-bottom-offcanvas-body"></div>
  </div>
</template>
<script setup>
import { offcanvas } from "@/views/mobile/components/BottomOffcanvas/useBottomOffcanvas.js";
const porps = defineProps({
  title: String,
});
</script>
