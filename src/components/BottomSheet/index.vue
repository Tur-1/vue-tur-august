<script setup>
import useBottomSheet from "@/components/BottomSheet/useBottomSheet";
import { watch } from "vue";

const props = defineProps({
  isOpen: Boolean,
  id: String,
  borderRadius: {
    type: String,
    default: "14px",
  },
  height: {
    type: String,
    default: "55vh",
  },
});

function closeBottomSheet(event) {
  if (event.target.closest(".bottom-sheet-container")) return;
  document.querySelector(".bottom-sheet-container").classList.remove("show");

  setTimeout(() => {
    useBottomSheet.close(props.id);
  }, 300);
}
watch(useBottomSheet, (value) => {
  if (value.isOpen == true && props.id == value.id) {
    setTimeout(() => {
      document.querySelector(".bottom-sheet-container").classList.add("show");
    }, 100);
  }
});
</script>
<template>
  <div
    class="bottom-sheet-bg"
    @click="closeBottomSheet"
    v-if="useBottomSheet.isOpen && useBottomSheet.id == props.id"
    :id="props.id"
  >
    <div class="bottom-sheet-container">
      <div class="bottom-sheet-header">
        <slot name="header"> </slot>
      </div>
      <div class="bottom-sheet-body">
        <slot name="body"> </slot>
      </div>
      <div class="bottom-sheet-footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>
<style>
.bottom-sheet-container {
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
}
</style>
