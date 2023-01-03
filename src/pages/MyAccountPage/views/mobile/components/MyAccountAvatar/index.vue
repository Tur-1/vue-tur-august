<script setup>
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
</script>

<template>
  <div class="account-image-wrap">
    <div class="account-image">
      <img
        src="@/assets/images/avatars/avatar_male.png"
        class="rounded-circle"
      />
    </div>
    <div class="account-user-name">
      <span>Hi,</span><span>{{ MyAccountStore.userInfo.name }}</span>
    </div>
  </div>
</template>
