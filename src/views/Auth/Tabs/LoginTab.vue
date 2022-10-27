<script setup>
import FormInput from "@/views/components/FormInput/index.vue";

import authTabs from "@/views/Auth/store/authTabs";
import SubmitButton from "@/views/components/SubmitButton/index.vue";
import { loginForm, login } from "@/views/Auth/services/LoginService";
</script>
<template>
  <div
    :class="{ 'show active': authTabs.Tab == 1 }"
    class="auth-form-content tab-pane fade"
    id="login-form"
    role="tabpanel"
    aria-labelledby="login-tab"
  >
    <form @submit.prevent="login">
      <FormInput
        label="Email *"
        type="email"
        id="login_email"
        v-model="loginForm.fields.email"
        :class="{ 'is-invalid': loginForm.errors.email }"
        :error="loginForm.errors.email"
      />
      <FormInput
        label="Password *"
        type="password"
        id="login_password"
        v-model="loginForm.fields.password"
        :class="{ 'is-invalid': loginForm.errors.password }"
        :error="loginForm.errors.password"
      />

      <SubmitButton
        :onProgress="loginForm.onProgress"
        title="sign in"
        class="w-100 mt-3 mb-1 auth-submit"
      />
    </form>
  </div>
</template>
