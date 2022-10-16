<script setup>
import useAuthApi from "@/views/Auth/services/useAuthApi";
import loginForm from "@/views/Auth/store/loginForm";
import BaseInput from "@/views/components/BaseInput/index.vue";
import Spinner from "@/views/Auth/components/Spinner.vue";
import { useRouter } from "vue-router";

import authModal from "@/views/Auth/store/authModal";
import routerStore from "@/router/routerStore";

const router = useRouter();

const login = async () => {
  loginForm.onProgress = true;
  loginForm.resetErrors();
  try {
    await useAuthApi.login();

    authModal.closeModal();
    router.push(routerStore.intendedPath);
  } catch (error) {
    useAuthApi.getLoginErrors(error.response);
  }

  loginForm.onProgress = false;
};
</script>
<template>
  <div
    class="auth-form-content tab-pane fade show active"
    id="login-form"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
    <form @submit.prevent="login">
      <BaseInput
        label="Email *"
        type="email"
        id="login_email"
        v-model="loginForm.email"
        :class="{ 'is-invalid': loginForm.error.email }"
        :error="loginForm.error.email"
      />
      <BaseInput
        label="Password *"
        type="password"
        id="login_password"
        v-model="loginForm.password"
        :class="{ 'is-invalid': loginForm.error.password }"
        :error="loginForm.error.password"
      />

      <button
        type="submit"
        class="btn btn-primary w-100 mt-3 mb-1 auth-submit"
        name="sign_in"
      >
        <span :class="{ marginRight: loginForm.onProgress }">sign in</span>
        <Spinner :onProgress="loginForm.onProgress" />
      </button>
    </form>
  </div>
</template>
