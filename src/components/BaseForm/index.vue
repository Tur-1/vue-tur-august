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
        <span :class="{ 'me-3': onProgress }">save</span>

        <SubmitSpinner :onProgress="onProgress" />
      </button>
    </div>
  </form>
</template>
<script setup>
import SubmitSpinner from "@/components/SubmitSpinner/index.vue";
defineEmits(["submit", "closeModal"]);
defineProps({
  onProgress: Boolean,
});
</script>
