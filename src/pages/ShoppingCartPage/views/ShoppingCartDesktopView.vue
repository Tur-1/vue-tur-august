<script setup>
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import ShoppingCartHeader from "@/pages/ShoppingCartPage/components/ShoppingCartHeader.vue";
import ShoppingCartProducts from "@/pages/ShoppingCartPage/components/ShoppingCartProducts.vue";
import ShoppingCartProductsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/pages/ShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartDetailsSkeleton.vue";

import ShoppingCartEmpty from "@/pages/ShoppingCartPage/components/ShoppingCartEmpty.vue";
import CartStore from "@/pages/ShoppingCartPage/stores/CartStore";
import CartCounter from "@/pages/ShoppingCartPage/stores/CartCounter";
</script>
<template>
  <section>
    <Breadcrumb pageTitle="shopping cart" />
    <div class="container mt-3">
      <ShoppingCartHeader />
      <div class="row d-flex justify-content-center" v-if="CartCounter !== 0">
        <ShoppingCartProducts v-if="!CartStore.onProgress" />
        <ShoppingCartProductsSkeleton v-if="CartStore.onProgress" />
        <ShoppingCartDetails v-if="!CartStore.onProgress" />
        <ShoppingCartDetailsSkeleton v-if="CartStore.onProgress" />
      </div>
      <ShoppingCartEmpty :show="CartCounter == 0" />
    </div>
  </section>
</template>
