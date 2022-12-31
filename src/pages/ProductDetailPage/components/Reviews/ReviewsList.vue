<template>
  <div class="reviews-list">
    <div class="review-item" v-for="review in ProductDetailStore.reviews">
      <Review :review="review" />
      <ReviewReply :reply="review.reply" v-if="review.reply" />
    </div>
  </div>
</template>
<script setup>
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";

import Review from "@/pages/ProductDetailPage/components/Reviews/Review.vue";
import ReviewReply from "@/pages/ProductDetailPage/components/Reviews/ReviewReply.vue";
</script>
