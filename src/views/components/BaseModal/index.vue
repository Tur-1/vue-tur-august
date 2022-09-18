<template>
  <Transition name="modal">
    <div :id="id" class="base-modal-bg" v-if="isOpen">
      <div class="base-modal">
        <div class="base-modal-content">
          <ModalHeader :title="title" @closeModal="$emit('closeModal')" />

          <ModalForm
            v-if="withForm"
            @closeModal="$emit('closeModal')"
            @submit="$emit('submit')"
          >
            <slot />
          </ModalForm>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import ModalHeader from "@/views/components/BaseModal/ModalHeader.vue";
import ModalForm from "@/views/components/BaseModal/ModalForm.vue";
defineProps(["withForm", "id", "title", "isOpen"]);
defineEmits(["closeModal", "submit"]);
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
