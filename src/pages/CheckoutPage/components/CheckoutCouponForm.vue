<script setup>
import CheckoutStore from "@/pages/CheckoutPage/stores/CheckoutStore";
import useCheckoutService from "@/pages/CheckoutPage/services/useCheckoutService";

const { applyCoupon } = useCheckoutService();
</script>

<template>
  <div class="card card_checkout_coupon_form">
    <div class="checkout_coupon_form">
      <input
        type="text"
        placeholder="Enter Coupon Code..."
        class="form-control border-0 shadow-none bg-transparent p-2"
        v-model="CheckoutStore.couponCode"
      />
      <button
        class="text-primary bg-transparent me-2"
        type="button"
        @click="applyCoupon"
      >
        {{ CheckoutStore.cartDetails.coupon ? "remove" : "Apply" }}
      </button>
    </div>
    <div class="m-2" v-show="CheckoutStore.cartDetails.coupon">
      <span class="text-primary" style="font-size: 12px">
        {{ CheckoutStore.cartDetails.coupon?.message }}
      </span>
    </div>
    <div
      class="m-2"
      v-show="
        CheckoutStore.couponErorrMsg != null &&
        CheckoutStore.cartDetails.coupon == null
      "
    >
      <span class="text-danger" style="font-size: 12px">
        {{ CheckoutStore.couponErorrMsg }}
      </span>
    </div>
  </div>
</template>
