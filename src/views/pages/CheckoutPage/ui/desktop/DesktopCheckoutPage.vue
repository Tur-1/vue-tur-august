<script setup>
import Breadcrumb from "@/views/components/Breadcrumb/index.vue";
import CheckoutHeader from "@/views/pages/CheckoutPage/ui/desktop/components/CheckoutHeader.vue";
import CheckoutAddresses from "@/views/pages/CheckoutPage/ui/desktop/components/CheckoutAddresses.vue";
import CheckoutProducts from "@/views/pages/CheckoutPage/ui/desktop/components/CheckoutProducts.vue";
import CheckoutCouponForm from "@/views/pages/CheckoutPage/ui/desktop/components/CheckoutCouponForm.vue";
import CheckoutDetails from "@/views/pages/CheckoutPage/ui/desktop/components/CheckoutDetails.vue";
import ShoppingCartEmpty from "@/views/pages/ShoppingCartPage/ui/mobile/components/ShoppingCartEmpty.vue";
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
