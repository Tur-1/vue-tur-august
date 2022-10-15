<template>
  <div class="reviews-list">
    <div class="review-item">
      <Review />
      <ReviewReply />
    </div>
  </div>
</template>
<script setup>
import Review from "@/views/pages/ProductDetailPage/ui/desktop/components/Reviews/Review.vue";
import ReviewReply from "@/views/pages/ProductDetailPage/ui/desktop/components/Reviews/ReviewReply.vue";
</script>
