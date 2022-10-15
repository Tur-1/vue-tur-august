<template>
  <BaseModal
    :withoutForm="true"
    :isOpen="authModal.isOpen"
    id="auth-modal"
    @closeModal="authModal.closeModal()"
  >
    <Auth />
  </BaseModal>
</template>
<script setup>
import Auth from "@/views/Auth/index.vue";
import BaseModal from "@/views/components/BaseModal/index.vue";
import authModal from "@/views/Auth/store/authModal";
</script>
