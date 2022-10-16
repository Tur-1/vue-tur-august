<script setup>
import MyAccountAvatar from "@/views/pages/MyAccountPage/ui/mobile/components/MyAccountAvatar/index.vue";
import MyAddressBook from "@/views/pages/MyAccountPage/ui/mobile/components/MyAddressBook/index.vue";
import MyAccountSettings from "@/views/pages/MyAccountPage/ui/mobile/components/MyAccountSettings/index.vue";
import MyOrders from "@/views/pages/MyAccountPage/ui/mobile/components/MyOrders/index.vue";
import Logout from "@/views/pages/MyAccountPage/ui/mobile/components/Logout/index.vue";

import useMyAccountPageApi from "@/views/pages/MyAccountPage/services/useMyAccountPageApi";
import userStore from "@/views/pages/MyAccountPage/store/userStore";

const getUserInformation = async () => {
  try {
    return await (
      await useMyAccountPageApi.getUserInformation()
    ).data;
  } catch (error) {
    console.log(error);
  }
};

userStore.information = await getUserInformation();
</script>
<template>
  <section>
    <MyAccountAvatar :userName="userStore.information.name" />

    <ul class="account-items">
      <MyOrders />
      <MyAccountSettings />
      <MyAddressBook />
      <Logout />
    </ul>
  </section>
</template>
