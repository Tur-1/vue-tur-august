<template>
  <div class="reviews-list">
    <div class="review-item">
      <Review />
      <ReviewReply />
    </div>
  </div>
</template>
<script setup>
import Review from "@/pages/ProductDetailPage/views/desktop/components/Reviews/Review.vue";
import ReviewReply from "@/pages/ProductDetailPage/views/desktop/components/Reviews/ReviewReply.vue";
</script>
