<script setup>
import BaseModal from "@/views/components/BaseModal/index.vue";
import BaseInput from "@/views/components/BaseInput/index.vue";
import { ref } from "vue";

let isPhoneNumberModalOpen = ref(false);
// methods
const openAccountPhoneNumberModal = () => {
  isPhoneNumberModalOpen.value = true;
};

const closeAccountPhoneNumberModal = () => {
  isPhoneNumberModalOpen.value = false;
};
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
            @click="openAccountPhoneNumberModal"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="w-100 text-dark">
          <p>No phone number saved}</p>
        </div>
      </div>
    </div>
  </div>

  <BaseModal
    :withForm="true"
    :isOpen="isPhoneNumberModalOpen"
    id="account-phone-number-modal"
    title="update phone number"
    @closeModal="closeAccountPhoneNumberModal"
    @submit=""
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
          placeholder="51 234 5678"
        />
      </div>
      <span class="text-danger mt-1 ms-2" style="font-size: 12px"> invil </span>
    </div>
  </BaseModal>
</template>
