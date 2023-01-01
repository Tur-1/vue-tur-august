<script setup>
import { RouterView, useRoute } from "vue-router";
import DesktopAuth from "@/components/DesktopAuth/index.vue";
import Footer from "@/layouts/desktop/components/Footer.vue";
import Header from "@/layouts/desktop/components/Header.vue";

const route = useRoute();
</script>

<template>
  <main>
    <Header />
    <RouterView :key="route.path" />
    <Footer />

    <DesktopAuth />
  </main>
</template>
