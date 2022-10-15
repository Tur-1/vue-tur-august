<template>
  <div class="review">
    <div class="review-user-image me-3">
      <img
        src="https://tur-august.herokuapp.com/assets/images/avatars/avatar_male.png"
        alt=""
        width="40"
        class="rounded-circle"
      />
    </div>
    <div class="d-flex flex-column w-100">
      <div class="d-flex flex-row justify-content-between text-center">
        <span class="d-block font-weight-bold">TURKI ALHARBI</span
        ><span class="date text-sm">1 second ago</span>
      </div>
      <div class="mt-2 text-wrap">
        <p class="comment-text text-break">..</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  review: Object,
});
</script>
