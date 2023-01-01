<script setup>
import AuthTabsHeader from "@/Auth/components/AuthTabsHeader.vue";

import LoginTab from "@/Auth/Tabs/LoginTab.vue";
import RegisterTab from "@/Auth/Tabs/RegisterTab.vue";
import ResetPasswrodTab from "@/Auth/Tabs/ResetPasswrodTab.vue";
</script>
<template>
  <div class="auth-container">
    <AuthTabsHeader />

    <div class="tab-content" id="myTabContent">
      <ul class="google-github-buttons">
        <li>
          <a class="btn btn-dark">
            <i class="bi bi-github me-1"></i>
            Sign in With Github
          </a>
        </li>
        <li>
          <a class="btn btn-danger">
            <i class="bi bi-google me-1"></i>
            Sign in With Google
          </a>
        </li>
      </ul>
      <LoginTab />
      <RegisterTab />
      <ResetPasswrodTab />
    </div>
  </div>
</template>
