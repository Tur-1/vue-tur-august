<template>
  <swipe-modal
    v-model="useBottomSheet.isOpen"
    :contents-height="height"
    :border-top-radius="borderRadius"
  >
    <slot />
  </swipe-modal>
</template>
<script setup>
import swipeModal from "@takuma-ru/vue-swipe-modal";
import { useBottomSheet } from "@/views/mobile/components/BottomSheet/useBottomSheet";

defineProps({
  borderRadius: {
    type: String,
    default: "14px",
  },
  height: {
    type: String,
    default: "65vh",
  },
});
</script>
