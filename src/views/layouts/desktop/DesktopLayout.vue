<script setup>
import DesktopLayoutFooter from "@/views/layouts/desktop/components/DesktopLayoutFooter.vue";
import DesktopLayoutHeader from "@/views/layouts/desktop/components/DesktopLayoutHeader.vue";
</script>

<template>
  <main>
    <DesktopLayoutHeader />
    <slot />
    <DesktopLayoutFooter />
  </main>
</template>
