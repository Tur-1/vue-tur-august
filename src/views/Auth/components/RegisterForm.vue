<template>
  <div
    class="auth-form-content tab-pane fade"
    id="register-form"
    role="tabpanel"
    aria-labelledby="register-form-tab"
  >
    <form>
      <BaseInput label="Name *" type="text" id="register_name" />
      <BaseInput label="Email *" type="email" id="register_email" />
      <BaseInput label="Password *" type="password" id="register_password" />
      <BaseInput
        label="confirm password *"
        type="password"
        id="password_confirmation"
      />

      <div class="mb-3 d-flex flex-column">
        <label for="gender-btns" class="m-2">Gender</label>
        <div class="gender-btns-wrap">
          <div class="gender-btns">
            <input
              type="radio"
              class="btn-check"
              id="gender_male"
              value="Male"
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-secondary" for="gender_male"
              >Male</label
            >
          </div>
          <div class="gender-btns">
            <input
              type="radio"
              class="btn-check"
              id="gender_female"
              value="Female"
              autocomplete="off"
            />
            <label class="btn btn-outline-secondary" for="gender_female"
              >Female</label
            >
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="btn btn-primary w-100 mt-3 mb-1"
        name="sign_up"
      >
        Sign up
      </button>
    </form>
  </div>
</template>
<script setup>
import BaseInput from "@/views/components/BaseInput/index.vue";
</script>
