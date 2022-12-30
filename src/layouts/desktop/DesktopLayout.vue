<script setup>
import { RouterView } from "vue-router";
import Toast from "@/components/Toast/index.vue";
import PageSpinner from "@/components/PageSpinner/index.vue";

import Footer from "@/layouts/desktop/components/Footer.vue";
import Header from "@/layouts/desktop/components/Header.vue";
// import DesktopAuth from "@/components/DesktopAuth/index.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
    <PageSpinner />
    <Toast />
   
    <!-- <DesktopAuth /> -->
  </main>
</template>
