<script setup>
import Breadcrumb from "@/views/desktop/components/Breadcrumb/index.vue";
import CheckoutProducts from "@/views/desktop/pages/DesktopCheckoutPage/components/CheckoutProducts.vue";
import CheckoutDetails from "@/views/desktop/pages/DesktopCheckoutPage/components/CheckoutDetails.vue";
import CheckoutCouponForm from "@/views/desktop/pages/DesktopCheckoutPage/components/CheckoutCouponForm.vue";
import CheckoutHeader from "@/views/desktop/pages/DesktopCheckoutPage/components/CheckoutHeader.vue";
import ShoppingCartEmpty from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartEmpty.vue";
import CheckoutAddresses from "@/views/desktop/pages/DesktopCheckoutPage/components/CheckoutAddresses.vue";
</script>
<template>
  <section>
    <Breadcrumb pageTitle="checkout" />
    <div class="container mt-3">
      <CheckoutHeader />
      <div class="row">
        <div class="col-xl-8 col-lg-7 col-md-6">
          <CheckoutAddresses />
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 mb-5">
          <CheckoutProducts />
          <CheckoutCouponForm />
          <CheckoutDetails />
        </div>
      </div>

      <ShoppingCartEmpty :show="false" />
    </div>
  </section>
</template>
