<script setup>
import { FormInput, FormStore, FormSelect } from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";

const { updateAccountInformation } = useMyAccountService();

const openModal = () => {
  FormStore.clearErrors();
  useBaseModel.open("account-info-modal");
  FormStore.setFields({
    name: MyAccountStore.userInfo.name,
    email: MyAccountStore.userInfo.email,
    gender: MyAccountStore.userInfo.gender,
  });
};
</script>
<template>
  <div class="row mb-1">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark">
            <strong>ACCOUNT INFO </strong>
          </span>
          <button class="bg-transparent border-0" @click="openModal">
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="text-dark">
          <p>
            <span class="me-1">Name: </span>
            {{ MyAccountStore.userInfo.name }}
          </p>
          <p>
            <span class="me-1">Email: </span>
            {{ MyAccountStore.userInfo.email }}
          </p>
          <p>
            <span class="me-1">Gender: </span>
            {{ MyAccountStore.userInfo.gender }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <BaseModal
    :withForm="true"
    id="account-info-modal"
    title="update account information"
    @closeModal="useBaseModel.close('account-info-modal')"
    @submit="updateAccountInformation"
  >
    <FormInput
      label="Name *"
      type="text"
      placeholder="name"
      id="accountName"
      v-model="FormStore.fields.name"
      :error="FormStore.errors.name"
    />

    <FormInput
      label="Email *"
      type="email"
      placeholder="email"
      v-model="FormStore.fields.email"
      :error="FormStore.errors.email"
    />

    <FormSelect
      label="Gender *"
      v-model="FormStore.fields.gender"
      :error="FormStore.errors.gender"
      id="accountGender"
      :options="['Male', 'Female']"
    />
  </BaseModal>
</template>
