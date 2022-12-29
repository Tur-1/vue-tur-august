<script setup>
import AccountInformation from "@/pages/MyAccountPage/views/desktop/components/MyAccountSettings/AccountInformation.vue";
import AccountPassword from "@/pages/MyAccountPage/views/desktop/components/MyAccountSettings/AccountPassword.vue";
import AccountPhoneNumber from "@/pages/MyAccountPage/views/desktop/components/MyAccountSettings/AccountPhoneNumber.vue";
</script>
<template>
  <div class="row g-5">
    <div class="col-md-7">
      <AccountInformation />
    </div>
    <div class="col-md-5">
      <AccountPassword />
      <AccountPhoneNumber />
    </div>
  </div>
</template>
