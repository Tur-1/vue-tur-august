<script setup>
import Breadcrumb from "@/views/components/Breadcrumb/index.vue";
import ShoppingCartHeader from "@/pages/ShoppingCartPage/views/desktop/components/ShoppingCartHeader.vue";
import ShoppingCartProducts from "@/pages/ShoppingCartPage/views/desktop/components/ShoppingCartProducts.vue";
import ShoppingCartProductsSkeleton from "@/pages/ShoppingCartPage/views/desktop/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetails from "@/pages/ShoppingCartPage/views/desktop/components/ShoppingCartDetails.vue";
import ShoppingCartDetailsSkeleton from "@/pages/ShoppingCartPage/views/desktop/components/ShoppingCartDetailsSkeleton.vue";
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
