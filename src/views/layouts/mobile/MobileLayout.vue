<script setup>
import { RouterView } from "vue-router";
import Footer from "@/views/layouts/mobile/components/Footer.vue";
import Header from "@/views/layouts/mobile/components/Header.vue";
import MobileAuth from "@/views/components/MobileAuth/index.vue";
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
