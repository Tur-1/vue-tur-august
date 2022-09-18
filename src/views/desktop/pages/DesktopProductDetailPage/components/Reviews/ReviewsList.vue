<template>
  <div class="reviews-list">
    <div class="review-item">
      <Review />
      <ReviewReply />
    </div>
  </div>
</template>
<script setup>
import Review from "@/views/desktop/pages/DesktopProductDetailPage/components/Reviews/Review.vue";
import ReviewReply from "@/views/desktop/pages/DesktopProductDetailPage/components/Reviews/ReviewReply.vue";
</script>
