<script setup>
import { RouterView } from "vue-router";
import Footer from "@/views/desktop/layouts/components/Footer.vue";
import Header from "@/views/desktop/layouts/components/Header.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <main>
      <Header />
      <Transition name="fade" mode="out-in">
        <transition>
          <component :is="Component" />
        </transition>
      </Transition>
      <Footer />
    </main>
  </router-view>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
