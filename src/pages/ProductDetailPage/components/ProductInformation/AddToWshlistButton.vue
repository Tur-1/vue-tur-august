<template>
  <div class="wishlist-btn-wrraper">
    <button
      class="add-wishlist-btn"
      @click="addToWishList(ProductDetailStore.product.id)"
      :class="{
        'product-in-wishlist': ProductDetailStore.product.inWishlist,
      }"
    >
      <i class="bi bi-heart"></i>
    </button>
  </div>
</template>
<script setup>
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";
import useWishlistService from "@/pages/WishlistPage/services/useWishlistService";
import WishlistStore from "@/pages/WishlistPage/stores/WishlistStore";

const { addProductToWishlist } = useWishlistService();

const addToWishList = async (productid) => {
  await addProductToWishlist(productid);

  ProductDetailStore.product.inWishlist = WishlistStore.isInWishlist(productid);
};
</script>
