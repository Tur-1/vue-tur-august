<script setup>
import { RouterView } from "vue-router";

import { ref } from "vue";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
</script>

<template>
  <router-view v-slot="{ Component }">
    <main>
      <Transition name="fade" mode="out-in">
        <transition>
          <component :is="Component" />
        </transition>
      </Transition>
    </main>
  </router-view>
</template>
