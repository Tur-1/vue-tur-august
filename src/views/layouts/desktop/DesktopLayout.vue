<script setup>
import { RouterView } from "vue-router";

import Footer from "@/views/layouts/desktop/components/Footer.vue";
import Header from "@/views/layouts/desktop/components/Header.vue";
import DesktopAuth from "@/views/components/DesktopAuth/index.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
    <DesktopAuth />
  </main>
</template>
