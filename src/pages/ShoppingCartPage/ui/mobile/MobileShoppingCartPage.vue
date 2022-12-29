<script setup>
import ShoppingCartProducts from "@/pages/ShoppingCartPage/views/mobile/components/ShoppingCartProducts.vue";
import ShoppingCartProductsSkeleton from "@/pages/ShoppingCartPage/views/mobile/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/pages/ShoppingCartPage/views/mobile/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/pages/ShoppingCartPage/views/mobile/components/ShoppingCartDetailsSkeleton.vue";
import ShoppingCartEmpty from "@/pages/ShoppingCartPage/views/mobile/components/ShoppingCartEmpty.vue";
</script>
<template>
  <section>
    <div class="d-flex flex-column mt-3">
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
  </section>
</template>
