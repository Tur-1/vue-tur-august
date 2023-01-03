<template>
  <div class="col-lg-7">
    <transition-group name="list" tag="div" class="mb-4">
      <div
        class="shopping-cart-product"
        v-for="(product, index) in CartStore.products"
        :key="product.cart_item_id"
      >
        <Link
          class="shopping-cart-product-img me-2"
          :to="{ name: 'productDetail', params: { productSlug: product.slug } }"
        >
          <img :src="product.main_image_url" class="img-fluid" />
          <span
            class="badge text-bg-danger discount-badge"
            v-show="product.discount_amount"
          >
            {{ product.discount_amount }}
          </span>
        </Link>
        <div class="shopping-cart-product-detail">
          <div class="shopping-cart-product-info">
            <div class="d-flex flex-column justify-content-between">
              <Link
                class="shopping-cart-product-brand"
                :to="{
                  name: 'productDetail',
                  params: { productSlug: product.slug },
                }"
              >
                {{ product.brand_name }}
              </Link>
              <Link
                class="shopping-cart-product-description"
                :to="{
                  name: 'productDetail',
                  params: { productSlug: product.slug },
                }"
              >
                {{ product.name }}
              </Link>
              <span class="shopping-cart-product-size">
                size: {{ product.size }}
              </span>
              <div class="shopping-cart-product-quantity">
                <button
                  :disabled="product.quantity == 1"
                  class="quantity-btn rounded-start"
                  type="button"
                  id="button-addon1"
                  @click="decrementItemQuantity(product.cart_item_id)"
                >
                  <i class="bi bi-dash"></i></button
                ><small class="quantity">{{ product.quantity }}</small
                ><button
                  class="quantity-btn rounded-end"
                  type="button"
                  id="button-addon1"
                  @click="incrementItemQuantity(product.cart_item_id)"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="shopping-cart-product-price--actions">
            <a
              role="button"
              class="shopping-cart-product-actions remove-action"
              @click="removeCartItem(product.cart_item_id)"
              ><i class="bi bi-x"></i
            ></a>
            <div class="shopping-cart-product-price">
              <span class="cart-discounted-product-price">
                {{ product.price_before_discount }}</span
              ><span class="text-primary"> {{ product.price }}</span>
            </div>
            <a
              role="button"
              class="shopping-cart-product-actions save-action"
              @click="
                saveForLater({
                  productId: product.id,
                  cartItemId: product.cart_item_id,
                })
              "
            >
              save for later </a
            ><span
              class="shopping-cart-product-out-of-stock"
              v-show="!product.in_stock"
            >
              out of stock
            </span>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script setup>
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
import CartStore from "@/pages/ShoppingCartPage/stores/CartStore";

const {
  removeCartItem,
  saveForLater,
  incrementItemQuantity,
  decrementItemQuantity,
} = useShoppingCartService();
</script>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
