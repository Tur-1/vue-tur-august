<template>
  <div class="wishlist-btn-wrraper">
    <button
      class="add-wishlist-btn"
      @click="addProductToWishlist(ProductDetailStore.product.id)"
      :disabled="form.processing"
      :class="{
        'product-in-wishlist': $page.props.productDetail.inWishlist,
      }"
    >
      <i v-if="!form.processing" class="bi bi-heart"></i>
      <div
        class="spinner-border spinner-border-sm"
        role="status"
        v-if="form.processing"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>
  </div>
</template>
<script setup>
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";
import useWishlistService from "@/pages/WishlistPage/services/useWishlistService";

const { addProductToWishlist } = useWishlistService();
</script>
