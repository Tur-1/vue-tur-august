<script setup>
import { useRouter } from "vue-router";
import useAuthApi from "@/Auth/api/useAuthApi";
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
import config from "@/config/app";
const router = useRouter();

const logout = async () => {
  await useAuthApi.logout();

  router.push("/");
};
</script>
<template>
  <div class="d-flex justify-content-between mb-4">
    <div>
      <a :href="config.DASHBOARD_URL"> Dashboard </a>
    </div>

    <div>
      <span style="text-align: center">
        Welcome Back, {{ MyAccountStore.userInfo.name }}
      </span>
    </div>

    <div>
      <a role="button" @click="logout" class="text-dark bg-transparent">
        <span>Logout</span>
      </a>
    </div>
  </div>
  <div class="card shadow-sm mb-3">
    <div class="card-body text-center p-4">
      <h5 class="card-title">Profile</h5>
    </div>
  </div>
</template>
