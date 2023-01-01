<script setup>
import { ref } from "vue";
import BaseModal from "@/components/BaseModal/index.vue";
import FormInput from "@/components/FormInput/index.vue";
import FormSelect from "@/components/FormSelect/index.vue";
let isModalOpen = ref(false);

const openAccountModal = () => {
  isModalOpen.value = true;
};
const closeAccountModal = () => {
  isModalOpen.value = false;
};
</script>
<template>
  <div class="row mb-1">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark"
            ><strong>ACCOUNT INFO </strong></span
          ><button class="bg-transparent border-0" @click="openAccountModal">
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="text-dark">
          <p><span class="me-1">Name: </span> TURKI ALHARBI</p>
          <p><span class="me-1">Email: </span>turkiAdmin@admin.com</p>
          <p><span class="me-1">Gender: </span>Male</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->

  <BaseModal
    :withForm="true"
    :isOpen="isModalOpen"
    id="account-info-modal"
    title="update account information"
    @closeModal="closeAccountModal"
    @submit=""
  >
    <template #form>
      <FormInput
        label="Name *"
        type="text"
        placeholder="name"
        id="accountName"
        class="is-invalid"
        error="is-invalid"
      />
      <FormInput
        label="Email *"
        type="email"
        placeholder="email"
        id="accountEmail"
        class="is-invalid"
      />
      <FormSelect
        label="Gender *"
        id="accountGender"
        :options="['male', 'female']"
      />
    </template>
  </BaseModal>
</template>
