<script setup>
import AccountInformation from "@/views/pages/MyAccountPage/ui/desktop/components/MyAccountSettings/AccountInformation.vue";
import AccountPassword from "@/views/pages/MyAccountPage/ui/desktop/components/MyAccountSettings/AccountPassword.vue";
import AccountPhoneNumber from "@/views/pages/MyAccountPage/ui/desktop/components/MyAccountSettings/AccountPhoneNumber.vue";
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
