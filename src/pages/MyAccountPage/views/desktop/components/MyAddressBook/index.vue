<script setup>
import MyAddressList from "@/pages/MyAccountPage/views/desktop/components/MyAddressBook/MyAddressList.vue";
import { FormInput, FormStore } from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { ref } from "vue";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModel";

const { storeNewAddress, updateAddress, deleteAddress } = useMyAccountService();

let editMode = ref(false);
let address = ref({
  address_id: null,
  index: null,
});

const openModal = (address = null) => {
  FormStore.clearErrors();
  useBaseModel.open("account-address-modal");

  if (!address) {
    editMode.value = true;
    FormStore.setFields(address);
  } else {
    FormStore.setFields({
      address_id: "",
      full_name: "",
      address: "",
      city: "",
      phone_number: "",
      street: "",
    });
    editMode.value = false;
  }
};

const openConfirmModal = ({ address_id, index }) => {
  useConfirmModal.open();
  address.value.address_id = address_id;
  address.value.index = index;
};
</script>
<template>
  <div class="p-1 mb-4">
    <button
      @click="openModal"
      class="border-0 bg-transparent d-flex align-items-center text-secondary"
    >
      <i class="bi bi-plus-circle me-2"></i
      ><span class="text-bold"> new address</span>
    </button>
  </div>
  <MyAddressList @onEditAddress="openModal" @onDelete="openConfirmModal" />

  <!-- Modal -->
  <BaseModal
    :withForm="true"
    id="account-address-modal"
    :title="editMode ? 'update address' : 'new address'"
    @closeModal="useBaseModel.close('account-address-modal')"
    @submit="editMode ? updateAddress() : storeNewAddress()"
  >
    <FormInput
      label="Full Name *"
      type="text"
      id="full_name"
      v-model="FormStore.fields.full_name"
      :error="FormStore.errors.full_name"
    />
    <FormInput
      label="address *"
      type="text"
      id="address"
      v-model="FormStore.fields.address"
      :error="FormStore.errors.address"
    />
    <FormInput
      label="city *"
      type="text"
      id="city"
      v-model="FormStore.fields.city"
      :error="FormStore.errors.city"
    />
    <FormInput
      label="street *"
      type="text"
      id="street"
      v-model="FormStore.fields.street"
      :error="FormStore.errors.street"
    />
    <FormInput
      label="phone number *"
      type="number"
      id="phone_number"
      v-model="FormStore.fields.phone_number"
      :error="FormStore.errors.phone_number"
    />
  </BaseModal>

  <ConfirmModal
    @onConfirm="deleteAddress(address)"
    @onCancel="useConfirmModal.close()"
  />
</template>
