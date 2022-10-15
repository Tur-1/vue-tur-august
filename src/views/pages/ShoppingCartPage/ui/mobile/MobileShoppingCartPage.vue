<script setup>
import ShoppingCartProducts from "@/views/pages/ShoppingCartPage/ui/mobile/components/ShoppingCartProducts.vue";
import ShoppingCartProductsSkeleton from "@/views/pages/ShoppingCartPage/ui/mobile/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/views/pages/ShoppingCartPage/ui/mobile/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/views/pages/ShoppingCartPage/ui/mobile/components/ShoppingCartDetailsSkeleton.vue";
import ShoppingCartEmpty from "@/views/pages/ShoppingCartPage/ui/mobile/components/ShoppingCartEmpty.vue";
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
