<template>
  <div class="tab-content bg-white shadow-sm mt-2" id="myAccountTabsContent">
    <div
      class="tab-pane fade show active p-3"
      id="account-settings"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <MyAccountSettings />
    </div>
    <div
      class="tab-pane fade"
      id="my-orders"
      role="tabpanel"
      aria-labelledby="my-orders-tab"
    >
      <div class="row d-flex justify-content-center"></div>
    </div>
    <div
      class="tab-pane fade p-3"
      id="address-book"
      role="tabpanel"
      aria-labelledby="address-book-tab"
    >
      <MyAddressBook />
      <!---->
    </div>
  </div>
</template>

<script setup>
import MyAddressBook from "@/pages/MyAccountPage/views/desktop/components/MyAddressBook/index.vue";
import MyAccountSettings from "@/pages/MyAccountPage/views/desktop/components/MyAccountSettings/index.vue";
</script>
