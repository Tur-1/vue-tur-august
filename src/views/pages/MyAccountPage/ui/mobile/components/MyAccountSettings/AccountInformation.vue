<script setup>
import BaseModal from "@/views/components/BaseModal/index.vue";
import BaseInput from "@/views/components/BaseInput/index.vue";
import BaseSelect from "@/views/components/BaseSelect/index.vue";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";

import {
  isModalOpen,
  updateAccountInfo,
  openModal,
  closeModal,
  userForm,
} from "@/views/pages/MyAccountPage/services/AccountInformationService";
</script>
<template>
  <div class="row mb-1">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark"
            ><strong>ACCOUNT INFO </strong></span
          ><button class="bg-transparent border-0" @click="openModal">
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="text-dark">
          <p>
            <span class="me-1">Name: </span>
            {{ accountPageContent.user.name }}
          </p>
          <p>
            <span class="me-1">Email: </span>
            {{ accountPageContent.user.email }}
          </p>
          <p>
            <span class="me-1">Gender: </span>
            {{ accountPageContent.user.gender }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->

  <BaseModal
    :withForm="true"
    :onProgress="userForm.onProgress"
    :isOpen="isModalOpen"
    id="account-info-modal"
    title="update account information"
    @closeModal="closeModal"
    @submit="updateAccountInfo()"
  >
    <BaseInput
      label="Name *"
      type="text"
      placeholder="name"
      id="accountName"
      v-model="userForm.fields.name"
      :class="{ 'is-invalid': userForm.errors.name }"
      :error="userForm.errors.name"
    />

    <BaseInput
      label="Email *"
      type="email"
      placeholder="email"
      v-model="userForm.fields.email"
      id="accountEmail"
      :class="{ 'is-invalid': userForm.errors.email }"
      :error="userForm.errors.email"
    />
    <BaseSelect
      label="Gender *"
      v-model="userForm.fields.gender"
      id="accountGender"
      :class="{ 'is-invalid': userForm.errors.gender }"
      :error="userForm.errors.gender"
      :options="['Male', 'Female']"
    />
  </BaseModal>
</template>
