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
        save
        <!-- <div class="spinner-border spinner-border-sm ms-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </div> -->
      </button>
    </div>
  </form>
</template>
<script setup>
defineEmits(["submit", "closeModal"]);
</script>
