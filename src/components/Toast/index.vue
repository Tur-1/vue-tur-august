<template>
  <Transition name="slide-fade">
    <div
      v-if="toastStore.isOpen"
      id="toast-alert"
      :class="toastStore.background"
      class="toast show align-items-center border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">{{ toastStore.message }}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          @click="toastStore.close()"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import toastStore from "@/views/components/Toast/toastStore";
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(140px);
  opacity: 0;
}
</style>
