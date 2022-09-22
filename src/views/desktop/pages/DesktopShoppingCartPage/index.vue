<script setup>
import Breadcrumb from "@/views/desktop/components/Breadcrumb/index.vue";
import ShoppingCartHeader from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartHeader.vue";
import ShoppingCartProducts from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartProducts.vue";
import ShoppingCartDetails from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartDetails.vue";
import ShoppingCartEmpty from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartEmpty.vue";
import ShoppingCartProductsSkeleton from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartProductsSkeleton.vue";
import ShoppingCartDetailsSkeleton from "@/views/desktop/pages/DesktopShoppingCartPage/components/ShoppingCartDetailsSkeleton.vue";
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
