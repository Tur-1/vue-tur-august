<template lang="">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a
        class="nav-link active"
        id="Description-tab"
        data-bs-toggle="tab"
        href="#Description"
        >Details</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        id="Additional-info-tab"
        data-bs-toggle="tab"
        href="#Additional-info"
        >Info & care</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews"
        >Reviews ({{ ProductDetailStore.reviews.length }})</a
      >
    </li>
  </ul>
</template>
<script setup>
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";
</script>
