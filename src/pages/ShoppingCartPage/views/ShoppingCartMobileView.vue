<script setup>
import CartProductCardMobile from "@/pages/ShoppingCartPage/components/CartProductCardMobile.vue";
import ShoppingCartProductsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/pages/ShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartDetailsSkeleton.vue";
import CartStore from "@/pages/ShoppingCartPage/stores/CartStore";
import ShoppingCartProducts from "@/pages/ShoppingCartPage/components/ShoppingCartProducts.vue";
</script>
<template>
  <section>
    <div class="d-flex flex-column mt-3">
      <CartProductCardMobile v-if="!CartStore.onProgress" />

      <ShoppingCartProductsSkeleton v-if="CartStore.onProgress" />
      <ShoppingCartDetails v-if="!CartStore.onProgress" />
      <ShoppingCartDetailsSkeleton v-if="CartStore.onProgress" />
    </div>
  </section>
</template>
