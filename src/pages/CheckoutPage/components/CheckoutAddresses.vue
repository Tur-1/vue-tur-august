<script setup>
import { ref } from "vue";
import { isNotNull, isNull } from "@/helpers";
import { useConfirmModal, ConfirmModal } from "@/components/ConfirmModel";
import CheckoutStore from "@/pages/CheckoutPage/stores/CheckoutStore";
import { FormInput, FormStore } from "@/components/BaseForm";
import { BaseModal, useBaseModel } from "@/components/BaseModal";
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";

const { storeNewAddress, updateAddress, deleteAddress } = useMyAccountService();
let editMode = ref(false);

let addressId = ref({
  address_id: null,
  index: null,
});

const openModal = (addressModel = null) => {
  FormStore.clearErrors();
  useBaseModel.open("account-address-modal");

  if (isNotNull(addressModel)) {
    editMode.value = true;
    FormStore.setFields(addressModel);
  }
  if (isNull(addressModel)) {
    editMode.value = false;
    FormStore.setFields({
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

const closeModal = () => {
  useBaseModel.close("account-address-modal");
};
</script>

<template>
  <transition-group name="list" tag="div" class="mb-4">
    <div
      class="card border-0 mb-2 d-flex justify-content-between align-items-center flex-row"
      v-for="(address, index) in MyAccountStore.userAddresses"
      :key="address.address_id"
    >
      <label
        class="user-address d-flex align-items-center flex-row m-0 p-0"
        style="width: 80%"
        :for="'address_id-' + address.address_id"
      >
        <input
          class="form-check-input ms-3"
          type="radio"
          :id="'address_id-' + address.address_id"
          :value="address.address_id"
          @change="CheckoutStore.setAddressId(address.address_id)"
          v-model="CheckoutStore.selectedAddress"
        />
        <div class="checkout_address_card_body">
          <div class="d-flex flex-column">
            <span class="card-title">{{ address.full_name }}</span>

            <small class="text-secondary" style="font-size: 12px">
              {{ address.phone_number }}
            </small>
            <div class="row">
              <span>
                {{ address.city }} , {{ address.street }} ,
                {{ address.address }}
              </span>
            </div>
          </div>
        </div>
      </label>
      <div class="address_actions d-flex">
        <button
          type="button"
          class="border-0 bg-transparent btn-sm"
          @click="openModal(address)"
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <span class="border-start ms-2 me-2"></span>
        <button
          @click="
            openConfirmModal({ address_id: address.address_id, index: index })
          "
          type="button"
          class="border-0 bg-transparent btn-sm"
        >
          <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  </transition-group>

  <div class="mb-3">
    <div class="mb-3 card mt-4 border-0">
      <div class="p-2">
        <a
          role="button"
          class="d-flex align-items-center text-secondary"
          @click="openModal(null)"
          ><i class="bi bi-plus-circle me-2"></i
          ><span class="text-bold"> new address</span></a
        >
      </div>
    </div>
  </div>

  <!-- Modal -->
  <BaseModal
    :withForm="true"
    id="account-address-modal"
    :title="editMode ? 'update address' : 'new address'"
    @closeModal="closeModal"
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
  <!---->
</template>
