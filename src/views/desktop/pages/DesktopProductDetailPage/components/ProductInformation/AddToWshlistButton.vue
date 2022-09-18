<template>
  <!-- <div class="wishlist-btn-wrraper">
        <button
            class="add-wishlist-btn"
            @click="addToWishlist($page.props.productDetail.id)"
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
    </div> -->
  <div class="wishlist-btn-wrraper">
    <button class="add-wishlist-btn">
      <i class="bi bi-heart"></i
      ><!---->
    </button>
  </div>
</template>
<!-- <script setup>
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
  product_id: "",
});

const addToWishlist = (product_id) => {
  form.product_id = product_id;
  form.post(route("addToWishlist"), {
    preserveScroll: true,
    preserveState: true,
  });
};
</script> -->
