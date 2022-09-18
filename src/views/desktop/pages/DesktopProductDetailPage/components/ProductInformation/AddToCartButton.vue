<template>
  <!-- <div class="cart-btn-wrraper">
        <button
            class="btn btn-primary cart-btn"
            @click="addToShoppingCart($page.props.productDetail.id)"
            :disabled="form.processing"
        >
            Add to cart
            <div
                class="spinner-border spinner-border-sm"
                role="status"
                v-if="form.processing"
            >
                <span class="visually-hidden">Loading...</span>
            </div>
        </button>
    </div> -->

  <div class="cart-btn-wrraper">
    <button class="btn btn-primary cart-btn">
      Add to cart
      <!---->
    </button>
  </div>
</template>

<!-- <script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import { ProductSize } from "@/Pages/ProductDetailPage/store";
let form = useForm({
    size_id: "",
    product_id: "",
});

const addToShoppingCart = (product_id) => {
    if (ProductSize.value.size_id == 0) {
        return false;
    }

    form.size_id = ProductSize.value.size_id;
    form.product_id = product_id;
    form.post(route("addToShoppingCart"), {
        preserveScroll: true,
        preserveState: true,
    });
};
</script> -->
