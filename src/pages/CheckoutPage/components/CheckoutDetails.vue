<template>
  <div class="mb-4 mt-3">
    <div class="card border-0 p-0">
      <div class="card-body p-0 pt-2">
        <ul class="list-group list-group-flush p-2">
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
          >
            cart subtotal
            <span>{{ CheckoutStore.cartDetails.subTotal }} SAR</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center px-0"
          >
            shipment fees
            <span> {{ CheckoutStore.cartDetails.shipmentFees }} </span>
          </li>

          <li
            class="list-group-item px-0"
            v-show="CheckoutStore.cartDetails.coupon"
          >
            <div class="d-flex justify-content-between align-items-center">
              <span>
                Discount: ({{ CheckoutStore.cartDetails.coupon?.code }})
              </span>
              <span
                >{{ CheckoutStore.cartDetails.coupon?.discounted_value }} SAR
              </span>
            </div>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0"
          >
            <div>
              <strong>The total amount </strong>
              <strong>
                <p class="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span
              ><strong>{{ CheckoutStore.cartDetails.total }} SAR</strong></span
            >
          </li>
        </ul>

        <button class="btn btn-primary buy-now-btn" @click="buyNow">
          <i class="bi bi-credit-card me-2"></i>
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import useCheckoutService from "@/pages/CheckoutPage/services/useCheckoutService";
import CheckoutStore from "@/pages/CheckoutPage/stores/CheckoutStore";

const { buyNow } = useCheckoutService();
</script>
