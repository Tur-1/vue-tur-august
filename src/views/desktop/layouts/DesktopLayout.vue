<script setup>
import { RouterView } from "vue-router";
import Footer from "@/views/desktop/layouts/components/Footer.vue";
import Header from "@/views/desktop/layouts/components/Header.vue";
import DesktopAuth from "@/views/desktop/components/DesktopAuth/index.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <main>
      <Header />
      <component :is="Component" />
      <Footer />
      <DesktopAuth />
    </main>
  </router-view>
</template>
