<script setup>
import { RouterView } from "vue-router";
import Toast from "@/views/components/Toast/index.vue";
import PageSpinner from "@/views/components/PageSpinner/index.vue";

import Footer from "@/views/layouts/desktop/components/Footer.vue";
import Header from "@/views/layouts/desktop/components/Header.vue";
import DesktopAuth from "@/views/components/DesktopAuth/index.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
    <PageSpinner />
    <Toast />
    <DesktopAuth />
  </main>
</template>
