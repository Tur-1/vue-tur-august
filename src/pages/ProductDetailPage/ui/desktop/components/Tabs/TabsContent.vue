<template>
  <div class="tab-content shop_info_tab entry-main-content">
    <div class="tab-pane fade show active" id="Description">
      <div></div>
    </div>
    <div class="tab-pane fade" id="Additional-info">
      <div></div>
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
import ReviewForm from "@/pages/ProductDetailPage/views/desktop/components/Reviews/ReviewForm.vue";
import ReviewsList from "@/pages/ProductDetailPage/views/desktop/components/Reviews/ReviewsList.vue";
</script>
