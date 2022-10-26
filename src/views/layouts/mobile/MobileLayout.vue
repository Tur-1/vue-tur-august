<script setup>
import { RouterView } from "vue-router";
import Footer from "@/views/layouts/mobile/components/Footer.vue";
import Header from "@/views/layouts/mobile/components/Header.vue";
import MobileAuth from "@/views/components/MobileAuth/index.vue";
import Toast from "@/views/components/Toast/index.vue";
import PageSpinner from "@/views/components/PageSpinner/index.vue";
</script>

<template>
  <Header />
  <main>
    <RouterView />
    <PageSpinner />

    <MobileAuth />
  </main>
  <Toast />
  <Footer />
</template>
