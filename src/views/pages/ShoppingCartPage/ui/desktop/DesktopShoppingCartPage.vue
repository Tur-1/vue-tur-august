<script setup>
import Breadcrumb from "@/views/components/Breadcrumb/index.vue";
import ShoppingCartHeader from "@/views/pages/ShoppingCartPage/ui/desktop/components/ShoppingCartHeader.vue";
import ShoppingCartProducts from "@/views/pages/ShoppingCartPage/ui/desktop/components/ShoppingCartProducts.vue";
import ShoppingCartProductsSkeleton from "@/views/pages/ShoppingCartPage/ui/desktop/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/views/pages/ShoppingCartPage/ui/desktop/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/views/pages/ShoppingCartPage/ui/desktop/components/ShoppingCartDetailsSkeleton.vue";
</script>
<template>
  <section>
    <Breadcrumb pageTitle="shopping cart" />
    <div class="container mt-3">
      <ShoppingCartHeader />
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
