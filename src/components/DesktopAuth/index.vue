<template>
  <BaseModal id="auth-modal" @closeModal="useAuthModal.close()">
    <Auth />
  </BaseModal>
</template>
<script setup>
import Auth from "@/Auth/views/index.vue";
import { BaseModal } from "@/components/BaseModal";
import useAuthModal from "@/Auth/services/useAuthModal";
</script>
