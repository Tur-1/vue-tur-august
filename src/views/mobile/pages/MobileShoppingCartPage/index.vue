<script setup>
import ShoppingCartProducts from "@/views/mobile/pages/MobileShoppingCartPage/components/ShoppingCartProducts.vue";
import ShoppingCartDetails from "@/views/mobile/pages/MobileShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartEmpty from "@/views/mobile/pages/MobileShoppingCartPage/components/ShoppingCartEmpty.vue";
import ShoppingCartProductsSkeleton from "@/views/mobile/pages/MobileShoppingCartPage/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetailsSkeleton from "@/views/mobile/pages/MobileShoppingCartPage/components/ShoppingCartDetailsSkeleton.vue";
</script>
<template>
  <section>
    <div class="container mt-3">
      <div class="row d-flex justify-content-center">
        <Suspense>
          <template #default>
            <ShoppingCartProducts />
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
    </div>
  </section>
</template>
