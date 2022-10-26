<script setup>
import AuthTabsHeader from "@/views/Auth/components/AuthTabsHeader.vue";
import SocialButtons from "@/views/Auth/components/SocialButtons.vue";
import LoginTab from "@/views/Auth/Tabs/LoginTab.vue";
import RegisterTab from "@/views/Auth/Tabs/RegisterTab.vue";
import ResetPasswrodTab from "@/views/Auth/Tabs/ResetPasswrodTab.vue";
</script>
<template>
  <div class="auth-container">
    <AuthTabsHeader />

    <div class="tab-content" id="myTabContent">
      <SocialButtons />
      <LoginTab />
      <RegisterTab />
      <ResetPasswrodTab />
    </div>
  </div>
</template>
