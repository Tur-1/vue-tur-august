<script setup>
import useOffcanvas from "@/components/RightOffcanvas/useOffcanvas";

import { watch } from "vue";
const props = defineProps({
  id: String,
  title: String,
});
const emits = defineEmits(["onClose"]);
const closeOffcanvas = () => {
  useOffcanvas.close(props.id);

  emits("onClose");
};
</script>
<template>
  <div
    :id="props.id"
    class="right-offcanvas"
    :class="{ show: useOffcanvas.isOpen && props.id == useOffcanvas.id }"
  >
    <div class="right-offcanvas-container">
      <div class="right-offcanvas-header">
        <button
          class="right-offcanvas-header-close-btn"
          type="button"
          @click="closeOffcanvas"
        >
          <i class="bi bi-chevron-left fa-lg me-2"></i>
          <strong>{{ props.title }}</strong>
        </button>
      </div>
      <div class="right-offcanvas-body">
        <slot name="body"> </slot>
      </div>
      <div class="right-offcanvas-footer">
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>
