<template>
  <Transition name="modal">
    <div :id="id" class="base-modal-bg" v-if="isOpen">
      <div class="base-modal">
        <div class="base-modal-content">
          <ModalHeader :title="title" @closeModal="$emit('closeModal')" />

          <BaseForm
            v-if="withForm"
            :onProgress="onProgress"
            @closeModal="$emit('closeModal')"
            @submit="$emit('submit')"
          >
            <slot />
          </BaseForm>
          <slot v-if="!withForm"> </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import ModalHeader from "@/views/components/BaseModal/ModalHeader.vue";
import BaseForm from "@/views/components/BaseForm/index.vue";

const props = defineProps({
  isOpen: Boolean,
  onProgress: Boolean,
  withForm: Boolean,
  id: String,
  title: String,
});
const emits = defineEmits(["closeModal", "submit"]);
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
