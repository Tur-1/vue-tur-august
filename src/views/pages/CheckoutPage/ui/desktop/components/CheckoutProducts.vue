<template>
  <!-- <TransitionGroup name="list" tag="div">
        <div
            class="checkout-product"
            v-for="(product, index) in $page.props.products"
            :key="product.cart_id"
        >
            <a class="checkout-product-img me-2">
                <img :src="product.main_image_url" class="img-fluid" />
            </a>
            <div class="checkout-product-detail">
                <div class="checkout-product-info">
                    <Link :href="product.link">
                        <span class="checkout-product-brand">
                            {{ product.brand_name }}
                        </span>
                    </Link>

                    <span class="checkout-product-description">
                        {{ product.name }}
                    </span>
                    <span class="checkout-product-size">
                        size: {{ product.size }}
                    </span>
                    <span class="checkout-product-qty">
                        Quantity: {{ product.quantity }}
                    </span>
                </div>

                <div class="checkout-product-price">
                    <span
                        class="shopping-cart-product-out-of-stock"
                        :class="{ hidden: product.stock_size != 0 }"
                    >
                        out of stock
                    </span>
                    <div class="d-flex flex-column">
                        <span
                            class="checkout-product-discounted-price"
                            v-show="product.in_stock"
                        >
                            {{ product.discounted_price }}
                        </span>
                        <span
                            class="checkout-product-current-price text-primary"
                        >
                            {{ product.price }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </TransitionGroup> -->
  <div>
    <div class="checkout-product">
      <a class="checkout-product-img me-2"
        ><img
          src="https://august-images.s3.amazonaws.com/images/products/product_52/1660101615-screenshot_2021_07_04_232016.webp"
          class="img-fluid"
      /></a>
      <div class="checkout-product-detail">
        <div class="checkout-product-info">
          <a
            href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
            ><span class="checkout-product-brand">Womens Best</span></a
          ><span class="checkout-product-description"
            >Power Seamless Tights</span
          ><span class="checkout-product-size"> size: L</span
          ><span class="checkout-product-qty"> Quantity: 1</span>
        </div>
        <div class="checkout-product-price">
          <span class="shopping-cart-product-out-of-stock hidden">
            out of stock
          </span>
          <div class="d-flex flex-column">
            <span class="checkout-product-discounted-price">287.00 SAR</span
            ><span class="checkout-product-current-price text-primary"
              >258 SAR</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-product">
      <a class="checkout-product-img me-2"
        ><img
          src="https://august-images.s3.amazonaws.com/images/products/product_52/1660101615-screenshot_2021_07_04_232016.webp"
          class="img-fluid"
      /></a>
      <div class="checkout-product-detail">
        <div class="checkout-product-info">
          <a
            href="https://tur-august.herokuapp.com/product-detail/power-seamless-tights-IF-41-O"
            ><span class="checkout-product-brand">Womens Best</span></a
          ><span class="checkout-product-description"
            >Power Seamless Tights</span
          ><span class="checkout-product-size"> size: XS</span
          ><span class="checkout-product-qty"> Quantity: 1</span>
        </div>
        <div class="checkout-product-price">
          <span class="shopping-cart-product-out-of-stock hidden">
            out of stock
          </span>
          <div class="d-flex flex-column">
            <span class="checkout-product-discounted-price">287.00 SAR</span
            ><span class="checkout-product-current-price text-primary"
              >258 SAR</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
