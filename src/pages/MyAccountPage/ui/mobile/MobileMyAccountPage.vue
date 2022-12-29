<script setup>
import MyAccountAvatar from "@/pages/MyAccountPage/views/mobile/components/MyAccountAvatar/index.vue";
import MyAddressBook from "@/pages/MyAccountPage/views/mobile/components/MyAddressBook/index.vue";
import MyAccountSettings from "@/pages/MyAccountPage/views/mobile/components/MyAccountSettings/index.vue";
import MyOrders from "@/pages/MyAccountPage/views/mobile/components/MyOrders/index.vue";
import Logout from "@/pages/MyAccountPage/views/mobile/components/Logout/index.vue";
import accountPageContent from "@/pages/MyAccountPage/store/accountPageContent";
import useMyAccountPageApi from "@/pages/MyAccountPage/api/useMyAccountPageApi";
import ConfirmModel from "@/views/components/ConfirmModel/index.vue";

let user = await useMyAccountPageApi.getUserInformation();
let userAddresses = await useMyAccountPageApi.getUserAddresses();

accountPageContent.user = user.data.data;
accountPageContent.userAddresses = userAddresses.data.data;
</script>
<template>
  <section>
    <MyAccountAvatar :userName="accountPageContent.user.name" />

    <ul class="account-items">
      <!-- <ConfirmModel :isOpen="true">
        <span>are u sure</span>
      </ConfirmModel> -->
      <MyOrders />
      <MyAccountSettings />
      <MyAddressBook />
      <Logout />
    </ul>
  </section>
</template>
