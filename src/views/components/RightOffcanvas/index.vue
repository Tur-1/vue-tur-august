<script setup>
const porps = defineProps({
  id: String,
  title: String,
});
</script>
<template>
  <div
    class="offcanvas offcanvas-end right-offcanvas"
    tabindex="-1"
    :id="id"
    aria-labelledby="staticBackdropLabel"
  >
    <div class="right-offcanvas-header">
      <button
        type="button"
        class="right-offcanvas-close-btn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <i class="fa-solid fa-arrow-left-long"></i>
      </button>

      <span class="page-title" :id="'staticBackdropLabel-' + id">
        {{ title }}
      </span>
    </div>
    <div class="offcanvas-body bg-light">
      <slot />
    </div>
  </div>
</template>
