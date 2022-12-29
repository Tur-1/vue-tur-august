<template>
  <BaseModal
    :withoutForm="true"
    id="auth-modal"
    @closeModal="useAuthModal.close()"
  >
    <Auth />
  </BaseModal>
</template>
<script setup>
import Auth from "@/views/Auth/index.vue";
import BaseModal from "@/views/components/BaseModal/index.vue";
import useAuthModal from "@/views/Auth/services/useAuthModal";
</script>
