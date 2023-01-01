<script setup>
import BaseModal from "@/components/BaseModal/index.vue";
import FormInput from "@/components/FormInput/index.vue";
import * as passwordService from "@/pages/MyAccountPage/services/AccountPasswordService";
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
              @click="passwordService.openModal"
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
    :onProgress="passwordService.passwordForm.onProgress"
    id="account-password-modal"
    title="update account password"
    @closeModal="passwordService.closeModal"
    @submit="passwordService.updateMyAccountPassword"
  >
    <FormInput
      label="current password *"
      type="password"
      v-model="passwordService.passwordForm.fields.current_password"
      :class="{
        'is-invalid': passwordService.passwordForm.errors.current_password,
      }"
      :error="passwordService.passwordForm.errors.current_password"
      id="accountCurrentPassword"
    />
    <FormInput
      label="new password *"
      type="password"
      id="accountNewPassword"
      v-model="passwordService.passwordForm.fields.new_password"
      :class="{
        'is-invalid': passwordService.passwordForm.errors.new_password,
      }"
      :error="passwordService.passwordForm.errors.new_password"
    />
    <FormInput
      label="confirm new password *"
      type="password"
      v-model="passwordService.passwordForm.fields.new_password_confirmation"
      :class="{
        'is-invalid':
          passwordService.passwordForm.errors.new_password_confirmation,
      }"
      :error="passwordService.passwordForm.errors.new_password_confirmation"
      id="accountNewPasswordConfirmation"
    />
  </BaseModal>
</template>
