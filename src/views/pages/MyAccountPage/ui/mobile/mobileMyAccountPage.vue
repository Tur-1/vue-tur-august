<script setup>
import MyAccountAvatar from "@/views/pages/MyAccountPage/ui/mobile/components/MyAccountAvatar/index.vue";
import MyAddressBook from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/index.vue";
import MyAccountSettings from "@/views/pages/MyAccountPage/ui/mobile/components/MyAccountSettings/index.vue";
import MyOrders from "@/views/pages/MyAccountPage/ui/mobile/components/MyOrders/index.vue";
import Logout from "@/views/pages/MyAccountPage/ui/mobile/components/Logout/index.vue";
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";
import useMyAccountPageApi from "@/views/pages/MyAccountPage/api/useMyAccountPageApi";
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
