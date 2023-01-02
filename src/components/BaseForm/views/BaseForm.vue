<template>
  <form @submit.prevent="$emit('submit')" class="p-2">
    <div class="base-form-body">
      <slot />
    </div>
    <div class="base-form-footer">
      <button type="button" class="cancel-btn" @click="$emit('closeModal')">
        cancel
      </button>

      <button type="submit" class="submit-btn">
        <span>save</span>

        <div
          class="spinner-border spinner-border-sm opacity-0"
          role="status"
          :class="{ 'opacity-100': FormStore.onProgress }"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </button>
    </div>
  </form>
</template>

<script setup>
import { FormStore } from "@/components/BaseForm";

defineEmits(["submit", "closeModal"]);
</script>
