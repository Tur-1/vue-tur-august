<script setup>
import Breadcrumb from "@/views/desktop/components/Breadcrumb/index.vue";
import ShoppingCartHeader from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartHeader.vue";
import ShoppingCartProducts from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartProducts.vue";
import ShoppingCartDetails from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartEmpty from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartEmpty.vue";
</script>
<template>
  <section>
    <Breadcrumb pageTitle="shopping cart" />
    <div class="container mt-3">
      <ShoppingCartHeader />
      <div class="row d-flex justify-content-center">
        <ShoppingCartProducts />
        <ShoppingCartDetails />
      </div>
      <ShoppingCartEmpty :show="false" />
    </div>
  </section>
</template>
