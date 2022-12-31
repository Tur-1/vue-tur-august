<template>
  <div class="col-lg-7">
    <div class="mb-4">
      <div class="shopping-cart-product">
        <a
          class="shopping-cart-product-img me-2"
          href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
          ><img
            src="https://august-images.s3.amazonaws.com/images/products/product_52/1660101615-screenshot_2021_07_04_232016.webp"
            class="img-fluid"
        /></a>
        <div class="shopping-cart-product-detail">
          <div class="shopping-cart-product-info">
            <div class="d-flex flex-column justify-content-between">
              <a
                class="shopping-cart-product-brand"
                href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
                >Womens Best</a
              ><a
                class="shopping-cart-product-description"
                href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
                >Power Seamless Tights</a
              ><span class="shopping-cart-product-size"> size: L</span>
              <div class="shopping-cart-product-quantity">
                <button
                  disabled=""
                  class="quantity-btn rounded-start"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-dash"></i></button
                ><small class="quantity">1</small
                ><button
                  class="quantity-btn rounded-end"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="shopping-cart-product-price--actions">
            <a class="shopping-cart-product-actions remove-action"
              ><i class="bi bi-x"></i
            ></a>
            <div class="shopping-cart-product-price">
              <span class="cart-discounted-product-price">287.00 SAR</span
              ><span class="text-primary">258 SAR</span>
            </div>
            <a class="shopping-cart-product-actions save-action">
              save for later </a
            ><span
              class="shopping-cart-product-out-of-stock"
              style="display: none"
            >
              out of stock
            </span>
          </div>
        </div>
      </div>
      <div class="shopping-cart-product">
        <a
          class="shopping-cart-product-img me-2"
          href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
          ><img
            src="https://august-images.s3.amazonaws.com/images/products/product_52/1660101615-screenshot_2021_07_04_232016.webp"
            class="img-fluid"
        /></a>
        <div class="shopping-cart-product-detail">
          <div class="shopping-cart-product-info">
            <div class="d-flex flex-column justify-content-between">
              <a
                class="shopping-cart-product-brand"
                href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
                >Womens Best</a
              ><a
                class="shopping-cart-product-description"
                href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
                >Power Seamless Tights</a
              ><span class="shopping-cart-product-size"> size: L</span>
              <div class="shopping-cart-product-quantity">
                <button
                  disabled=""
                  class="quantity-btn rounded-start"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-dash"></i></button
                ><small class="quantity">1</small
                ><button
                  class="quantity-btn rounded-end"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="shopping-cart-product-price--actions">
            <a class="shopping-cart-product-actions remove-action"
              ><i class="bi bi-x"></i
            ></a>
            <div class="shopping-cart-product-price">
              <span class="cart-discounted-product-price">287.00 SAR</span
              ><span class="text-primary">258 SAR</span>
            </div>
            <a class="shopping-cart-product-actions save-action">
              save for later </a
            ><span
              class="shopping-cart-product-out-of-stock"
              style="display: none"
            >
              out of stock
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
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
