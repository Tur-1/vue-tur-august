<script setup>
import BaseModal from "@/views/components/BaseModal/index.vue";
import BaseInput from "@/views/components/BaseInput/index.vue";
import { ref } from "vue";

let isPasswordModalOpen = ref(false);
// methods
const openAccountPasswordModal = () => {
  isPasswordModalOpen.value = true;
};

const closeAccountPasswordModal = () => {
  isPasswordModalOpen.value = false;
};
</script>

<template>
  <div class="row mb-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <div wire:id="8MbtLTrynBn0TDd3Bq0P">
          <header
            class="d-flex justify-content-between mb-2 align-items-center"
          >
            <span class="card-title text-dark"><strong>PASSWORD</strong></span>
            <button
              class="bg-transparent border-0"
              @click="openAccountPasswordModal"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
          </header>
        </div>

        <input class="w-100 p-2" placeholder="*********" disabled="" />
      </div>
    </div>
  </div>

  <BaseModal
    :withForm="true"
    :isOpen="isPasswordModalOpen"
    id="account-password-modal"
    title="update account password"
    @closeModal="closeAccountPasswordModal"
    @submit=""
  >
    <template #form>
      <BaseInput
        label="current password *"
        type="password"
        id="accountCurrentPassword"
      />
      <BaseInput
        label="new password *"
        type="password"
        id="accountNewPassword"
      />
      <BaseInput
        label="confirm new password *"
        type="password"
        id="accountNewPasswordConfirmation"
      />
    </template>
  </BaseModal>
</template>
