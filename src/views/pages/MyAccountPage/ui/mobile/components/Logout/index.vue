<script setup>
import { useRouter } from "vue-router";
import useAuthApi from "@/views/Auth/api/useAuthApi";

const router = useRouter();

const logout = async () => {
  try {
    await useAuthApi.logout();

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <li>
    <button class="text-dark" @click="logout">
      <i class="bi bi-box-arrow-left pb-2 me-2"></i>
      <div
        class="d-flex align-items-center justify-content-between w-100 border-bottom pb-2"
      >
        <span class="account-item-title">Log out</span>
        <i class="bi bi-chevron-right"></i>
      </div>
    </button>
  </li>
</template>
