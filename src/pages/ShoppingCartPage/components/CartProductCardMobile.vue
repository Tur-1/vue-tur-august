<template>
  <div class="container-fluid">
    <div
      class="mobile-shopping-cart-product"
      id="cart-item-1"
      @touchstart="swipeActions('cart-item-1')"
    >
      <div class="cart-item">
        <a class="product-img" href="">
          <img
            src="https://august-images.s3.amazonaws.com/images/products/product_58/1660377921-screenshot_2022_08_13_110434.webp"
            class="img-fluid"
          />
        </a>
        <div class="product-details">
          <div class="product-info">
            <a
              class="brand-name"
              href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights"
            >
              Womens Best
            </a>
            <span class="description">Power Seamless Tights</span>
            <span class="size"> size: L</span>
            <div class="quantity-container">
              <button
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
          <div class="cart-item-product-price">
            <span class="out-of-stock d-none"> out of stock </span>
            <div class="price">
              <span class="discounted-product-price">287.00 SAR</span>
              <span class="text-primary">258 SAR</span>
            </div>
          </div>
        </div>
      </div>
      <div class="swipe-cart-item">
        <div class="cart-item-actions">
          <button class="save-for-later-button" @click="moveCartItemToWishlist">
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
    <div
      class="mobile-shopping-cart-product"
      id="cart-item-2"
      @touchstart="swipeActions('cart-item-2')"
    >
      <div class="cart-item">
        <a class="product-img" href="">
          <img
            src="https://august-images.s3.amazonaws.com/images/products/product_58/1660377921-screenshot_2022_08_13_110434.webp"
            class="img-fluid"
          />
        </a>
        <div class="product-details">
          <div class="product-info">
            <a
              class="brand-name"
              href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights"
            >
              Womens Best
            </a>
            <span class="description">Power Seamless Tights</span>
            <span class="size"> size: L</span>
            <div class="quantity-container">
              <button
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
          <div class="cart-item-product-price">
            <span class="out-of-stock d-none"> out of stock </span>
            <div class="price">
              <span class="discounted-product-price">287.00 SAR</span>
              <span class="text-primary">258 SAR</span>
            </div>
          </div>
        </div>
      </div>
      <div class="swipe-cart-item">
        <div class="cart-item-actions">
          <button class="save-for-later-button" @click="moveCartItemToWishlist">
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
  </div>
</template>
<script setup>
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
};

const removeCartItem = () => {
  console.log("removeCartItem");
};

const moveCartItemToWishlist = () => {
  console.log("moveCartItemToWishlist");
};
</script>
