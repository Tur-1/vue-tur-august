<script setup>
import { RouterView } from "vue-router";
import Footer from "@/views/mobile/layouts/components/Footer.vue";
import Header from "@/views/mobile/layouts/components/Header.vue";
import MobileAuth from "@/views/mobile/components/MobileAuth/index.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <Header />
    <main>
      <component :is="Component" />
      <MobileAuth />
    </main>
    <Footer />
  </router-view>
</template>
