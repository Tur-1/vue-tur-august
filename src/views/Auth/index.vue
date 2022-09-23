<script setup>
import AuthTabsHeader from "@/views/Auth/components/AuthTabsHeader.vue";
import SocialButtons from "@/views/Auth/components/SocialButtons.vue";
import LoginForm from "@/views/Auth/components/LoginForm.vue";
import RegisterForm from "@/views/Auth/components/RegisterForm.vue";
import ResetPasswrod from "@/views/Auth/components/ResetPasswrod.vue";
</script>
<template>
  <div class="auth-container">
    <AuthTabsHeader />

    <div class="tab-content" id="myTabContent">
      <SocialButtons />
      <LoginForm />
      <RegisterForm />
      <ResetPasswrod />
    </div>
  </div>
</template>
