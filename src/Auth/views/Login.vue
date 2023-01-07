<script setup>
import { FormInput } from "@/components/BaseForm";
import authTabs from "@/Auth/store/authTabs";
import SubmitButton from "@/components/SubmitButton/index.vue";
import loginForm from "@/Auth/store/loginForm";
import useAuthService from "@/Auth/services/useAuthService";

const { login } = useAuthService();
</script>
<template>
  <div
    :class="{ 'show active': authTabs.Tab == 1 }"
    class="auth-form-content tab-pane fade"
    id="login-form"
    role="tabpanel"
    aria-labelledby="login-tab"
  >
    <div class="d-flex flex-column text-dark mb-3">
      <span class="mb-3 text-center">You can log in with :</span>
      <span class="mb-1"> Email: <strong>admin@admin.com</strong> </span>

      <span>
        Password:
        <strong>123456</strong>
      </span>
    </div>
    <form @submit.prevent="login">
      <FormInput
        label="Email *"
        type="email"
        id="login_email"
        v-model="loginForm.fields.email"
        :error="loginForm.errors.email"
      />
      <FormInput
        label="Password *"
        type="password"
        id="login_password"
        v-model="loginForm.fields.password"
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
