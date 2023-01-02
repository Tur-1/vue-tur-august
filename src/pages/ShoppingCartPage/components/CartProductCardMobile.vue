<template>
  <div class="container-fluid">
    <transition-group name="list" tag="div" class="mb-4">
      <div
        v-for="(product, index) in CartStore.products"
        :key="product"
        class="mobile-shopping-cart-product"
        :id="`cart-item-${product.id}`"
        @touchstart="swipeActions(`cart-item-${product.id}`)"
      >
        <div class="cart-item">
          <Link
            class="product-img"
            :to="{
              name: 'productDetail',
              params: { productSlug: product.slug },
            }"
          >
            <img :src="product.main_image_url" class="img-fluid" />
          </Link>

          <div class="product-details">
            <div class="product-info">
              <Link
                class="brand-name"
                :to="{
                  name: 'productDetail',
                  params: { productSlug: product.slug },
                }"
              >
                {{ product.brand_name }}
              </Link>
              <span class="description">{{ product.name }}</span>
              <span class="size"> size: {{ product.size }}</span>
              <div class="quantity-container">
                <button
                  class="quantity-btn rounded-start"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-dash"></i></button
                ><small class="quantity">{{ product.quantity }}</small
                ><button
                  class="quantity-btn rounded-end"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
            <div class="cart-item-product-price">
              <span class="out-of-stock d-none" v-show="!product.in_stock">
                out of stock
              </span>
              <div class="price">
                <span class="discounted-product-price">
                  {{ product.price_before_discount }}
                </span>
                <span class="text-primary">{{ product.price }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swipe-cart-item">
          <div class="cart-item-actions">
            <button
              class="save-for-later-button"
              @click="moveCartItemToWishlist"
            >
              <i class="bi bi-heart"></i>
              Save for later
            </button>
            <button class="cart-item-remove-button" @click="removeCartItem">
              <i class="bi bi-trash"></i>
              Remove
            </button>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script setup>
import CartStore from "@/pages/ShoppingCartPage/stores/CartStore";

const swipeActions = (itemId) => {
  let cartItems = [
    ...document.querySelectorAll(".mobile-shopping-cart-product"),
  ];

  let item = document.getElementById(itemId);
  if (event.touches[0].clientX > 330) {
    cartItems.forEach((items) => {
      items.firstElementChild.style.transform = "translateX(0px)";
    });
    item.firstElementChild.style.transform = "translateX(-140px)";
  }
  if (event.touches[0].clientX < 230) {
    item.firstElementChild.style.transform = "translateX(0px)";
  }
  console.log(cartItems);
};

const removeCartItem = () => {
  console.log("removeCartItem");
};

const moveCartItemToWishlist = () => {
  console.log("moveCartItemToWishlist");
};
</script>
