<script setup>
import CartProductCardMobile from "@/pages/ShoppingCartPage/components/CartProductCardMobile.vue";
import ShoppingCartProductsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/pages/ShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/pages/ShoppingCartPage/components/ShoppingCartDetailsSkeleton.vue";
import ShoppingCartEmpty from "@/pages/ShoppingCartPage/components/ShoppingCartEmpty.vue";
</script>
<template>
  <section>
    <div class="d-flex flex-column mt-3">
      <Suspense>
        <template #default>
          <CartProductCardMobile />
        </template>

        <template #fallback>
          <ShoppingCartProductsSkeleton />
        </template>
      </Suspense>
      <Suspense>
        <template #default>
          <ShoppingCartDetails />
        </template>

        <template #fallback>
          <ShoppingCartDetailsSkeleton />
        </template>
      </Suspense>
    </div>
    <ShoppingCartEmpty :show="false" />
  </section>
</template>
