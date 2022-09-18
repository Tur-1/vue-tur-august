<script setup>
import { RouterView } from "vue-router";
import DesktopLayoutFooter from "@/views/desktop/layouts/components/DesktopLayoutFooter.vue";
import DesktopLayoutHeader from "@/views/desktop/layouts/components/DesktopLayoutHeader.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <main>
      <DesktopLayoutHeader />
      <Transition name="fade" mode="out-in">
        <transition>
          <component :is="Component" />
        </transition>
      </Transition>
      <DesktopLayoutFooter />
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
