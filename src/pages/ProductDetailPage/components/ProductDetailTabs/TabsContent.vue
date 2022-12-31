<template>
  <div class="tab-content shop_info_tab entry-main-content">
    <div class="tab-pane fade show active" id="Description">
      <div v-html="ProductDetailStore.product.details"></div>
    </div>
    <div class="tab-pane fade" id="Additional-info">
      <div v-html="ProductDetailStore.product.info_and_care"></div>
    </div>

    <!--Reviews-->
    <div class="tab-pane fade" id="Reviews">
      <div class="tab-pane fade active show" id="Reviews">
        <div class="reviews-area">
          <ReviewForm />

          <ReviewsList />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";

import ReviewForm from "@/pages/ProductDetailPage/components/Reviews/ReviewForm.vue";
import ReviewsList from "@/pages/ProductDetailPage/components/Reviews/ReviewsList.vue";
</script>
