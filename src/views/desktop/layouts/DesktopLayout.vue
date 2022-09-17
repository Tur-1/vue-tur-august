<script setup>
import DesktopLayoutFooter from "@/views/desktop/layouts/components/DesktopLayoutFooter.vue";
import DesktopLayoutHeader from "@/views/desktop/layouts/components/DesktopLayoutHeader.vue";
</script>

<template>
  <main>
    <DesktopLayoutHeader />
    <slot />
    <DesktopLayoutFooter />
  </main>
</template>
