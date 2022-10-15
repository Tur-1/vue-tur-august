<script setup></script>
<template>
  <!-- <AddNewAddress @openMyAddressBookModal="openMyAddressBookModal" />

  <MyAddressList
    @openMyAddressBookModal="openMyAddressBookModal"
    @destroyUserAddress="destroyUserAddress"
  />

  <BaseModal
    id="my-address-book-modal"
    :title="!editMode ? 'new address' : 'update address'"
    :isModalOpen="isAddressBookModalOpen"
    @closeModal="closeMyAddressBookModal"
  >
    <BaseForm
      submitButtonTitle="save changes"
      cancelButtonTitle="cancel"
      @formSubmited="!editMode ? storeNewAddress() : updateUserAddress()"
      @cancelRequest="closeMyAddressBookModal"
      :formProcessing="myAddressForm.processing"
    >
      <MyAddressForm :myAddressForm="myAddressForm" />
    </BaseForm>
  </BaseModal> -->
  <div class="p-1 mb-4">
    <button
      class="border-0 bg-transparent d-flex align-items-center text-secondary"
    >
      <i class="bi bi-plus-circle me-2"></i
      ><span class="text-bold"> new address</span>
    </button>
  </div>
  <div class="row mb-3">
    <div class="col-md-4 mb-3">
      <div class="card border-0 shadow-sm">
        <div
          class="card-header bg-white d-flex justify-content-between align-items-center"
        >
          <span class="card-title">Turki Alharbi</span>
          <div class="address_actions p-0">
            <button class="bg-transparent border-0 btn-sm">
              <i class="bi bi-pencil-square"></i></button
            ><span class="border-start m-2"></span
            ><button class="bg-transparent border-0 btn-sm">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <div class="card-body d-flex flex-column">
          <span class="text-secondary" style="font-size: 11px"
            >37736373738</span
          >
          <div class="row text-dark">
            <span>Rnhr</span><span>Hdhe</span><span>Hdhduf</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
