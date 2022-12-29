<script setup>
import BaseModal from "@/views/components/BaseModal/index.vue";
import FormInput from "@/views/components/FormInput/index.vue";
import FormSelect from "@/views/components/FormSelect/index.vue";
import accountPageContent from "@/pages/MyAccountPage/store/accountPageContent";
import * as accountService from "@/pages/MyAccountPage/services/AccountInformationService";
</script>
<template>
  <div class="row mb-1">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark"
            ><strong>ACCOUNT INFO </strong></span
          ><button
            class="bg-transparent border-0"
            @click="accountService.openModal"
          >
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
    :onProgress="accountService.userForm.onProgress"
    id="account-info-modal"
    title="update account information"
    @closeModal="accountService.closeModal"
    @submit="accountService.updateAccountInfo"
  >
    <FormInput
      label="Name *"
      type="text"
      placeholder="name"
      id="accountName"
      v-model="accountService.userForm.fields.name"
      :class="{ 'is-invalid': accountService.userForm.errors.name }"
      :error="accountService.userForm.errors.name"
    />

    <FormInput
      label="Email *"
      type="email"
      placeholder="email"
      v-model="accountService.userForm.fields.email"
      id="accountEmail"
      :class="{ 'is-invalid': accountService.userForm.errors.email }"
      :error="accountService.userForm.errors.email"
    />
    <FormSelect
      label="Gender *"
      v-model="accountService.userForm.fields.gender"
      id="accountGender"
      :class="{ 'is-invalid': accountService.userForm.errors.gender }"
      :error="accountService.userForm.errors.gender"
      :options="['Male', 'Female']"
    />
  </BaseModal>
</template>
