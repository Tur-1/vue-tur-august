<template>
  <BaseModal :isOpen="isOpen" id="auth-modal" @closeModal="isOpen = false">
    <Auth />
  </BaseModal>
</template>
<script setup>
import { ref } from "vue";
import Auth from "@/views/Auth/index.vue";
import BaseModal from "@/views/components/BaseModal/index.vue";

let isOpen = ref(false);
</script>
