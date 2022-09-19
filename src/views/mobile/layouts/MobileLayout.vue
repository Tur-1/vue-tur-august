<script setup>
import { RouterView } from "vue-router";
import Footer from "@/views/mobile/layouts/components/Footer.vue";
import Header from "@/views/mobile/layouts/components/Header.vue";
import BottomOffcanvas from "@/views/mobile/components/BottomOffcanvas/index.vue";
</script>

<template>
  <router-view v-slot="{ Component }">
    <Header />
    <main>
      <Transition name="fade" mode="out-in">
        <transition>
          <component :is="Component" />
        </transition>
      </Transition>
      <BottomOffcanvas title="AUGUST"> </BottomOffcanvas>
    </main>
    <Footer />
  </router-view>
</template>
