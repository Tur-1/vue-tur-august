<script setup>
import ShoppingCartProducts from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartProducts.vue";
import ShoppingCartDetails from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartEmpty from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartEmpty.vue";
</script>
<template>
  <section>
    <div class="container mt-3">
      <div class="row d-flex justify-content-center">
        <ShoppingCartProducts />
        <ShoppingCartDetails />
      </div>
      <ShoppingCartEmpty :show="false" />
    </div>
  </section>
</template>
