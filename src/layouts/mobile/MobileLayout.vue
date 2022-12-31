<script setup>
import { RouterView, useRoute } from "vue-router";
import Footer from "@/layouts/mobile/components/Footer.vue";
import Header from "@/layouts/mobile/components/Header.vue";
// import MobileAuth from "@/components/MobileAuth/index.vue";

import PageSpinner from "@/components/PageSpinner/index.vue";

const route = useRoute();
</script>

<template>
  <Header />
  <main>
    <RouterView :key="route.path" />
    <PageSpinner />

    <!-- <MobileAuth /> -->
  </main>
  <Footer />
</template>
