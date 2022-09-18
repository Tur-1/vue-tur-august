<script setup>
import DesktopLayoutFooter from "@/views/desktop/layouts/components/DesktopLayoutFooter.vue";
import DesktopLayoutHeader from "@/views/desktop/layouts/components/DesktopLayoutHeader.vue";

import { onMounted, ref } from "vue";

let contentTrigger = ref(false);
onMounted(() => {
  contentTrigger.value = true;
});
</script>

<template>
  <main>
    <DesktopLayoutHeader />
    <Transition name="fade" mode="out-in">
      <slot v-if="contentTrigger" />
    </Transition>
    <DesktopLayoutFooter />
  </main>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
