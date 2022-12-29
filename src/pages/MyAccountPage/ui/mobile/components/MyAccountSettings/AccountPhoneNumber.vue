<script setup>
import BaseModal from "@/views/components/BaseModal/index.vue";
import accountPageContent from "@/pages/MyAccountPage/store/accountPageContent";

import ErrorMessage from "@/views/components/ErrorMessage/index.vue";
import * as PhoneNumberService from "@/pages/MyAccountPage/services/PhoneNumberService";
</script>
<template>
  <div class="row mb-3">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark"
            ><strong>PHONE NUMBER </strong></span
          >
          <button
            class="bg-transparent border-0"
            @click="PhoneNumberService.openModal"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="w-100 text-dark">
          <p>
            {{
              accountPageContent.user.phone_number ?? "No phone number saved"
            }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <BaseModal
    :withForm="true"
    :onProgress="PhoneNumberService.form.value.onProgress"
    id="account-phone-number-modal"
    title="update phone number"
    @closeModal="PhoneNumberService.closeModal"
    @submit="PhoneNumberService.updateMyPhoneNumber"
  >
    <div class="mb-3">
      <div class="input-group input-group-sm">
        <span
          class="input-group-text d-flex justify-content-between"
          id="basic-addon1"
        >
          <img
            src="https://flagcdn.com/w20/sa.png"
            srcset="https://flagcdn.com/w40/sa.png 2x"
            width="25"
            alt="Saudi Arabia"
          />
          <span>+966</span>
        </span>
        <input
          class="form-control form-control-sm"
          id="phone_number"
          type="tel"
          v-model="PhoneNumberService.form.value.phone_number"
          placeholder="51 234 5678"
        />
      </div>
      <ErrorMessage :message="PhoneNumberService.form.value.error" />
    </div>
  </BaseModal>
</template>
