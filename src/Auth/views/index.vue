<script setup>
import AuthTabsHeader from "@/Auth/components/AuthTabsHeader.vue";

import Login from "@/Auth/views/Login.vue";
import Register from "@/Auth/views/Register.vue";
import ResetPasswrod from "@/Auth/views/ResetPasswrod.vue";
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
      <Login />
      <Register />
      <ResetPasswrod />
    </div>
  </div>
</template>
