<template>
  <Transition name="modal">
    <div
      :id="id ?? 'confirm-modal'"
      class="confirm-modal-bg"
      v-if="ConfirmModelStore.isOpen"
    >
      <div class="confirm-modal">
        <div class="confirm-modal-content">
          <div class="confirm-modal-body">
            <h5>{{ title }}</h5>
            <slot />
          </div>
          <div class="confirm-modal-footer">
            <button type="button" class="cancel-btn" @click="$emit('cancel')">
              <span>Cancel</span>
            </button>

            <button type="button" class="confirm-btn" @click="$emit('confirm')">
              <span>Confirm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import ConfirmModelStore from "@/views/components/ConfirmModel/ConfirmModelStore";

const props = defineProps({
  id: String,
  title: String,
});
const emits = defineEmits(["submit", "confirm", "cancel"]);
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
