<script setup>
import AuthTabsHeader from "@/views/Auth/components/AuthTabsHeader.vue";

import LoginTab from "@/views/Auth/Tabs/LoginTab.vue";
import RegisterTab from "@/views/Auth/Tabs/RegisterTab.vue";
import ResetPasswrodTab from "@/views/Auth/Tabs/ResetPasswrodTab.vue";
</script>
<template>
  <div class="auth-container">
    <AuthTabsHeader />

    <div class="tab-content" id="myTabContent">
      <LoginTab />
      <RegisterTab />
      <ResetPasswrodTab />
    </div>
  </div>
</template>
