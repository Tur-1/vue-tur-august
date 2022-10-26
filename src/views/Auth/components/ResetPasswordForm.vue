<template>
  <div class="container m-auto">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Reset Password</div>

          <div class="card-body">
            <form @submit.prevent="updatePassword">
              <BaseInput
                label="E-Mail Address *"
                v-model="updatePasswordForm.email"
                type="email"
                id="update_reset_email"
                :customClass="{
                  'is-invalid': updatePasswordForm.errors.email,
                }"
                :errorMsg="updatePasswordForm.errors.email"
              />

              <BaseInput
                label="Password *"
                v-model="updatePasswordForm.password"
                type="password"
                id="update_password"
                :customClass="{
                  'is-invalid': updatePasswordForm.errors.password,
                }"
                :errorMsg="updatePasswordForm.errors.password"
              />
              <BaseInput
                label="confirm password *"
                v-model="updatePasswordForm.password_confirmation"
                type="password"
                id="update_password_confirmation"
                :customClass="{
                  'is-invalid': updatePasswordForm.errors.password_confirmation,
                }"
                :errorMsg="updatePasswordForm.errors.password_confirmation"
              />
              <div class="m-3 text-center">
                <button
                  type="submit"
                  class="btn btn-primary"
                  :disabled="updatePasswordForm.processing"
                >
                  Reset Password
                  <div
                    v-show="updatePasswordForm.processing"
                    class="ms-2 spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BaseInput from "@/components/Base/BaseInput.vue";

let updatePasswordForm = useForm({
  token: usePage().props.value.token,
  email: usePage().props.value.email,
  password: "",
  password_confirmation: "",
});
const updatePassword = () => {
  updatePasswordForm.post(route("password.update"));
};
</script>
