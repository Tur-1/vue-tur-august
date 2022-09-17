<script setup>
import { RouterLink, RouterView } from "vue-router";

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
  <header>
    <h1>mobile header</h1>
  </header>
  <slot />
  <footer>
    <ul>
      <li>mobile foter</li>
      <li>mobile foter</li>
    </ul>
  </footer>
</template>
