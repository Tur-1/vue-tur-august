<script setup>
import { RouterView, useRoute } from "vue-router";

import Footer from "@/layouts/desktop/components/Footer.vue";
import Header from "@/layouts/desktop/components/Header.vue";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const route = useRoute();
// import DesktopAuth from "@/components/DesktopAuth/index.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView :key="route.path" />
    <Footer />
    <LoadingSpinner />

    <!-- <DesktopAuth /> -->
  </main>
</template>
