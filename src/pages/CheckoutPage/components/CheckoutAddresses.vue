<script setup>
import { useConfirmModal, ConfirmModal } from "@/components/ConfirmModel";
import CheckoutStore from "@/pages/CheckoutPage/stores/CheckoutStore";
import { ref } from "vue";

let address = ref({ id: "", index: "" });

const openAddressModal = () => {};

const openConfirmModal = ({ id, index }) => {
  useConfirmModal.open();
  address.value.id = id;
  address.value.index = index;
};
</script>

<template>
  <transition-group name="list" tag="div" class="mb-4">
    <div
      class="card border-0 mb-2 d-flex justify-content-between align-items-center flex-row"
      v-for="(address, index) in CheckoutStore.userAddresses"
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
          @click="openAddressModal(address)"
        >
          <i class="bi bi-pencil-square"></i>
        </button>
        <span class="border-start ms-2 me-2"></span>
        <button
          @click="openConfirmModal({ id: address.address_id, index: index })"
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
        <a role="button" class="d-flex align-items-center text-secondary"
          ><i class="bi bi-plus-circle me-2"></i
          ><span class="text-bold"> new address</span></a
        >
      </div>
    </div>
  </div>
  <!---->
</template>
