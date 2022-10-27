<script setup>
import BaseModal from "@/views/components/BaseModal/index.vue";
import FormInput from "@/views/components/FormInput/index.vue";

import {
  isModalOpen,
  updateMyAccountPassword,
  openModal,
  closeModal,
  passwordForm,
} from "@/views/pages/MyAccountPage/services/AccountPasswordService";
import BaseModelStore from "@/views/components/BaseModal/BaseModelStore";
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
              @click="BaseModelStore.open('account-password-modal')"
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
    :onProgress="passwordForm.onProgress"
    id="account-password-modal"
    title="update account password"
    @closeModal="BaseModelStore.close('account-password-modal')"
    @submit="updateMyAccountPassword()"
  >
    <FormInput
      label="current password *"
      type="password"
      v-model="passwordForm.fields.current_password"
      :class="{ 'is-invalid': passwordForm.errors.current_password }"
      :error="passwordForm.errors.current_password"
      id="accountCurrentPassword"
    />
    <FormInput
      label="new password *"
      type="password"
      id="accountNewPassword"
      v-model="passwordForm.fields.new_password"
      :class="{ 'is-invalid': passwordForm.errors.new_password }"
      :error="passwordForm.errors.new_password"
    />
    <FormInput
      label="confirm new password *"
      type="password"
      v-model="passwordForm.fields.new_password_confirmation"
      :class="{ 'is-invalid': passwordForm.errors.new_password_confirmation }"
      :error="passwordForm.errors.new_password_confirmation"
      id="accountNewPasswordConfirmation"
    />
  </BaseModal>
</template>
