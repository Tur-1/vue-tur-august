<template>
  <BottomSheet id="auth-modal" height="85vh">
    <template #header>
      <span class="auth-title">AUGUST</span>
    </template>
    <template #body>
      <Auth />
    </template>
  </BottomSheet>
</template>
<script setup>
import Auth from "@/views/Auth/index.vue";
import BottomSheet from "@/views/components/BottomSheet/index.vue";
</script>
<style>
.auth-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}
</style>
