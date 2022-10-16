<script setup>
import AccountInformation from "@/views/pages/MyAccountPage/ui/mobile/components/MyAccountSettings/AccountInformation.vue";
import AccountPassword from "@/views/pages/MyAccountPage/ui/mobile/components/MyAccountSettings/AccountPassword.vue";
import AccountPhoneNumber from "@/views/pages/MyAccountPage/ui/mobile/components/MyAccountSettings/AccountPhoneNumber.vue";
import RightOffcanvas from "@/views/components/RightOffcanvas/index.vue";
</script>
<template>
  <li>
    <button
      data-bs-toggle="offcanvas"
      data-bs-target="#account-settings-offcanvas"
      class="text-dark"
      type="button"
    >
      <i class="bi bi-person-video2 pb-2 me-2"></i>
      <div
        class="d-flex align-items-center justify-content-between w-100 border-bottom pb-2"
      >
        <span class="account-item-title">Account Settings</span>
        <i class="bi bi-chevron-right"></i>
      </div>
    </button>
  </li>
  <RightOffcanvas title="Account Settings" id="account-settings-offcanvas">
    <div class="row g-5">
      <div class="col-md-7">
        <AccountInformation />
      </div>
      <div class="col-md-5">
        <AccountPassword />
        <AccountPhoneNumber />
      </div>
    </div>
  </RightOffcanvas>
</template>
