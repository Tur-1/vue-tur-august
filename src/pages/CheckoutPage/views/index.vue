<script setup>
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import CheckoutHeader from "@/pages/CheckoutPage/components/CheckoutHeader.vue";
import CheckoutAddresses from "@/pages/CheckoutPage/components/CheckoutAddresses.vue";
import CheckoutProducts from "@/pages/CheckoutPage/components/CheckoutProducts.vue";
import CheckoutCouponForm from "@/pages/CheckoutPage/components/CheckoutCouponForm.vue";
import CheckoutDetails from "@/pages/CheckoutPage/components/CheckoutDetails.vue";
import { ref, onMounted } from "vue";
import useCheckoutService from "@/pages/CheckoutPage/services/useCheckoutService";

let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}
const { getCheckoutContent } = useCheckoutService();
onMounted(getCheckoutContent);
</script>
<template>
  <section>
    <Breadcrumb pageTitle="checkout" v-if="isDesktop" />
    <div class="container mt-3">
      <CheckoutHeader v-if="isDesktop" />
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
    </div>
  </section>
</template>
