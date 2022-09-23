<template>
  <div
    class="auth-form-content tab-pane fade show active"
    id="login-form"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
    <form>
      <BaseInput label="Email *" type="email" id="login_email" />
      <BaseInput label="Password *" type="password" id="login_password" />

      <button
        type="submit"
        class="btn btn-primary w-100 mt-3 mb-1"
        name="sign_in"
      >
        sign in
      </button>
    </form>
  </div>
</template>
<script setup>
import BaseInput from "@/views/components/BaseInput/index.vue";
</script>
