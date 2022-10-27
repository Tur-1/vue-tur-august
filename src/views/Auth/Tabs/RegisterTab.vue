<script setup>
import FormInput from "@/views/components/FormInput/index.vue";
import authTabs from "@/views/Auth/store/authTabs";
import GendersFields from "@/views/Auth/components/GendersFields.vue";
import SubmitButton from "@/views/components/SubmitButton/index.vue";

import { registerForm, register } from "@/views/Auth/services/RegisterService";
</script>

<template>
  <div
    :class="{ 'show active': authTabs.Tab == 2 }"
    class="auth-form-content tab-pane fade"
    id="register-form"
    role="tabpanel"
    aria-labelledby="register-form-tab"
  >
    <form @submit.prevent="register">
      <FormInput
        label="Name *"
        type="text"
        id="register_name"
        v-model="registerForm.fields.register_name"
        :class="{ 'is-invalid': registerForm.errors.register_name }"
        :error="registerForm.errors.register_name"
      />
      <FormInput
        label="Email *"
        type="email"
        id="register_email"
        v-model="registerForm.fields.register_email"
        :class="{ 'is-invalid': registerForm.errors.register_email }"
        :error="registerForm.errors.register_email"
      />
      <FormInput
        label="Password *"
        type="password"
        id="register_password"
        v-model="registerForm.fields.register_password"
        :class="{ 'is-invalid': registerForm.errors.register_password }"
        :error="registerForm.errors.register_password"
      />
      <FormInput
        label="confirm password *"
        type="password"
        id="password_confirmation"
        v-model="registerForm.fields.password_confirmation"
        :class="{ 'is-invalid': registerForm.errors.password_confirmation }"
        :error="registerForm.errors.password_confirmation"
      />

      <GendersFields :form="registerForm" />

      <SubmitButton
        :onProgress="registerForm.onProgress"
        title="sign up"
        class="w-100 mt-3 mb-1 auth-submit"
      />
    </form>
  </div>
</template>
