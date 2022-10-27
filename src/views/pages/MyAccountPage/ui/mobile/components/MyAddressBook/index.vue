<script setup>
import RightOffcanvas from "@/views/components/RightOffcanvas/index.vue";
import AddNewAddress from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/AddNewAddress.vue";
import MyAddressList from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/MyAddressList.vue";
import BaseModal from "@/views/components/BaseModal/index.vue";
import MyAddressForm from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/MyAddressForm.vue";
import * as MyAddressBookService from "@/views/pages/MyAccountPage/services/MyAddressBookService";
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
    <AddNewAddress @openModal="MyAddressBookService.openModal" />

    <MyAddressList
      @openModal="MyAddressBookService.openModal"
      @destroyAddress="MyAddressBookService.openConfirmModal"
    />

    <BaseModal
      id="address-book-modal"
      :withForm="true"
      :onProgress="MyAddressBookService.addressForm.onProgress"
      @closeModal="MyAddressBookService.closeModal()"
      :title="
        MyAddressBookService.updateMode.value ? 'update address' : 'new address'
      "
      @submit="
        MyAddressBookService.updateMode.value
          ? MyAddressBookService.updateUserAddress()
          : MyAddressBookService.storeAddress()
      "
    >
      <MyAddressForm :addressForm="MyAddressBookService.addressForm" />
    </BaseModal>

    <ConfirmModel
      @onConfirm="MyAddressBookService.destroyAddress()"
      @onCancel="ConfirmModelStore.close()"
    >
      <span>are you sure you want to delete this address ? </span>
    </ConfirmModel>
  </RightOffcanvas>
</template>
