<template>
  <section>
    <Breadcrumb pageTitle="shopping cart" v-if="isDesktop" />
    <div
      class="mt-3"
      :class="{ container: isDesktop, 'container-fluid': isMobile }"
    >
      <ShoppingCartHeader v-if="isDesktop" />
      <div class="row d-flex justify-content-center" v-if="CartCounter !== 0">
        <ShoppingCartProducts v-if="!CartStore.onProgress && isDesktop" />
        <CartProductCardMobile v-if="!CartStore.onProgress && isMobile" />
        <ShoppingCartProductsSkeleton v-if="CartStore.onProgress" />
        <ShoppingCartDetails v-if="!CartStore.onProgress" />
        <ShoppingCartDetailsSkeleton v-if="CartStore.onProgress" />
      </div>
      <ShoppingCartEmpty :show="CartCounter == 0" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import CartProductCardMobile from "@/pages/ShoppingCartPage/components/CartProductCardMobile.vue";
import ShoppingCartHeader from "@/pages/ShoppingCartPage/components/ShoppingCartHeader.vue";
import ShoppingCartProducts from "@/pages/ShoppingCartPage/components/ShoppingCartProducts.vue";
import ShoppingCartProductsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/pages/ShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartDetailsSkeleton.vue";
import ShoppingCartEmpty from "@/pages/ShoppingCartPage/components/ShoppingCartEmpty.vue";
import CartStore from "@/pages/ShoppingCartPage/stores/CartStore";
import CartCounter from "@/pages/ShoppingCartPage/stores/CartCounter";
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}

const { getCartProducts } = useShoppingCartService();

onMounted(getCartProducts);
</script>
