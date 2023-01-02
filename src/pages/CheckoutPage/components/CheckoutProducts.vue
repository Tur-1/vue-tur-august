<template>
  <TransitionGroup name="list" tag="div">
    <div
      class="checkout-product"
      v-for="(product, index) in CheckoutStore.products"
      :key="product.cart_item_id"
    >
      <a class="checkout-product-img me-2">
        <img :src="product.main_image_url" class="img-fluid" />
      </a>
      <div class="checkout-product-detail">
        <div class="checkout-product-info">
          <Link
            :to="{
              name: 'productDetail',
              params: { productSlug: product.slug },
            }"
          >
            <span class="checkout-product-brand">
              {{ product.brand_name }}
            </span>
          </Link>

          <span class="checkout-product-description">
            {{ product.name }}
          </span>
          <span class="checkout-product-size"> size: {{ product.size }} </span>
          <span class="checkout-product-qty">
            Quantity: {{ product.quantity }}
          </span>
        </div>

        <div class="checkout-product-price">
          <span
            class="shopping-cart-product-out-of-stock"
            :class="{ hidden: product.in_stock }"
          >
            out of stock
          </span>
          <div class="d-flex flex-column">
            <span
              class="checkout-product-discounted-price"
              v-show="product.in_stock"
            >
              {{ product.price_before_discount }}
            </span>
            <span class="checkout-product-current-price text-primary">
              {{ product.price }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>
<script setup>
import CheckoutStore from "@/pages/CheckoutPage/stores/CheckoutStore";
</script>
