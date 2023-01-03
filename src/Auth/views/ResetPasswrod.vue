<template>
  <div
    :class="{ 'show active': authTabs.Tab == 3 }"
    class="auth-form-content tab-pane fade"
    id="ResetPassword"
    role="tabpanel"
  >
    <div class="text-center">
      <span class="text-dark">Reset Password</span>

      <div class="mt-3 mb-3"></div>
    </div>

    <div class="p-1">
      <form @submit.prevent="sendPasswordResetLink">
        <FormInput label="E-Mail Address *" type="email" id="reset_email" />
        <div class="mt-3 mb-2 text-center">
          <button type="submit" class="btn btn-primary">
            Send Password Reset Link
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="m-2 text-end">
    <a href="#" role="button" class="text-dark" @click="authTabs.openTab(3)">
      Forgot password?
    </a>
  </div>
</template>
<script setup>
import authTabs from "@/Auth/store/authTabs";
import { FormInput } from "@/components/BaseForm";
</script>
