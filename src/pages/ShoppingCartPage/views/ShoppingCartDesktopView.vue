<script setup>
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import ShoppingCartHeader from "@/pages/ShoppingCartPage/components/ShoppingCartHeader.vue";
import ShoppingCartProducts from "@/pages/ShoppingCartPage/components/ShoppingCartProducts.vue";
import ShoppingCartProductsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/pages/ShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartEmpty from "@/pages/ShoppingCartPage/components/ShoppingCartEmpty.vue";
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
