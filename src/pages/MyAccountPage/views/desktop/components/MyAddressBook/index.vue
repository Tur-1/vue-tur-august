<script setup>
import MyAddressList from "@/pages/MyAccountPage/views/desktop/components/MyAddressBook/MyAddressList.vue";
import AddNewAddress from "@/pages/MyAccountPage/views/desktop/components/MyAddressBook/AddNewAddress.vue";
import { FormInput, FormStore } from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { ref } from "vue";
import { ConfirmModal, useConfirmModal } from "@/components/ConfirmModel";
import { isNotNull, isNull } from "@/helpers";

const { storeNewAddress, updateAddress, deleteAddress } = useMyAccountService();

let editMode = ref(false);

let addressId = ref({
  address_id: null,
  index: null,
});

const openModal = (address = null) => {
  FormStore.clearErrors();
  useBaseModel.open("account-address-modal");

  if (isNotNull(address)) {
    editMode.value = true;
    FormStore.setFields(address);
  }
  if (isNull(address)) {
    editMode.value = false;
    FormStore.setFields({
      address_id: "",
      full_name: "",
      address: "",
      city: "",
      phone_number: "",
      street: "",
    });
  }
};

const openConfirmModal = ({ address_id, index }) => {
  useConfirmModal.open();
  addressId.value.address_id = address_id;
  addressId.value.index = index;
};
</script>
<template>
  <AddNewAddress @openModal="openModal" />
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
    @onConfirm="deleteAddress(addressId)"
    @onCancel="useConfirmModal.close()"
  />
</template>
