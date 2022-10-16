<script setup>
import BaseInput from "@/views/components/BaseInput/index.vue";
import useAuthApi from "@/views/Auth/services/useAuthApi";
import Spinner from "@/views/Auth/components/Spinner.vue";
import registerForm from "@/views/Auth/store/registerForm";
import { useRouter } from "vue-router";
import authModal from "@/views/Auth/store/authModal";
import routerStore from "@/router/routerStore";

const router = useRouter();
const register = async () => {
  registerForm.onProgress = true;
  registerForm.resetErrors();
  try {
    await useAuthApi.register();

    authModal.closeModal();
    router.push(routerStore.intendedPath);
  } catch (error) {
    useAuthApi.getRegisterErrors(error.response);
  }

  registerForm.onProgress = false;
};
</script>

<template>
  <div
    class="auth-form-content tab-pane fade"
    id="register-form"
    role="tabpanel"
    aria-labelledby="register-form-tab"
  >
    <form @submit.prevent="register">
      <BaseInput
        label="Name *"
        type="text"
        id="register_name"
        v-model="registerForm.register_name"
        :class="{ 'is-invalid': registerForm.error.register_name }"
        :error="registerForm.error.register_name"
      />
      <BaseInput
        label="Email *"
        type="email"
        id="register_email"
        v-model="registerForm.register_email"
        :class="{ 'is-invalid': registerForm.error.register_email }"
        :error="registerForm.error.register_email"
      />
      <BaseInput
        label="Password *"
        type="password"
        id="register_password"
        v-model="registerForm.register_password"
        :class="{ 'is-invalid': registerForm.error.register_password }"
        :error="registerForm.error.register_password"
      />
      <BaseInput
        label="confirm password *"
        type="password"
        id="password_confirmation"
        v-model="registerForm.password_confirmation"
        :class="{ 'is-invalid': registerForm.error.password_confirmation }"
        :error="registerForm.error.password_confirmation"
      />

      <div class="mb-3 d-flex flex-column">
        <label for="gender-btns" class="mb-1">Gender</label>
        <div class="gender-btns-wrap">
          <div class="gender-btns">
            <input
              type="radio"
              class="btn-check"
              id="gender_male"
              value="Male"
              checked
              v-model="registerForm.gender"
            />
            <label class="btn btn-outline-secondary" for="gender_male">
              Male
            </label>
          </div>
          <div class="gender-btns">
            <input
              type="radio"
              class="btn-check"
              v-model="registerForm.gender"
              id="gender_female"
              value="Female"
            />
            <label class="btn btn-outline-secondary" for="gender_female">
              Female
            </label>
          </div>
        </div>
        <span class="text-danger text-sm" v-show="registerForm.error.gender">
          {{ registerForm.error.gender }}
        </span>
      </div>

      <button
        type="submit"
        class="btn btn-primary w-100 mt-3 mb-1"
        name="sign_up"
      >
        <span :class="{ marginRight: registerForm.onProgress }">sign up</span>
        <Spinner :onProgress="registerForm.onProgress" />
      </button>
    </form>
  </div>
</template>
