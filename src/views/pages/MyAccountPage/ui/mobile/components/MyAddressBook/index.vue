<script setup>
import RightOffcanvas from "@/views/components/RightOffcanvas/index.vue";

import AddNewAddress from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/AddNewAddress.vue";
import MyAddressList from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/MyAddressList.vue";
import BaseModal from "@/views/components/BaseModal/index.vue";
import MyAddressForm from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/MyAddressForm.vue";
import {
  isModalOpen,
  storeAddress,
  openModal,
  closeModal,
  addressForm,
  destroyAddress,
  openConfirmModal,
} from "@/views/pages/MyAccountPage/services/MyAddressBookService";
import ConfirmModel from "@/views/components/ConfirmModel/index.vue";
import ConfirmModelStore from "@/views/components/ConfirmModel/ConfirmModelStore";
</script>
<template>
  <li>
    <button
      data-bs-toggle="offcanvas"
      data-bs-target="#address-book-offcanvas"
      role="button"
      class="text-dark"
    >
      <i class="bi bi-geo-alt pb-2 me-2"></i>

      <div
        class="d-flex align-items-center justify-content-between w-100 border-bottom pb-2"
      >
        <span class="account-item-title">Address Book</span>
        <i class="bi bi-chevron-right"></i>
      </div>
    </button>
  </li>
  <RightOffcanvas title="Address Book" id="address-book-offcanvas">
    <AddNewAddress @openModal="openModal" />

    <MyAddressList @openModal="openModal" @destroyAddress="openConfirmModal" />

    <BaseModal
      :withForm="true"
      :onProgress="addressForm.onProgress"
      :isOpen="isModalOpen"
      id="address-book-modal"
      title="new address"
      @closeModal="closeModal"
      @submit="storeAddress()"
    >
      <MyAddressForm :addressForm="addressForm" />
    </BaseModal>

    <ConfirmModel
      :isOpen="ConfirmModelStore.isOpen"
      @confirm="destroyAddress"
      @closeModel="ConfirmModelStore.close()"
    >
      <span>are you sure ? </span>
    </ConfirmModel>
  </RightOffcanvas>
</template>
