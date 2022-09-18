<script setup>
import ShopPageHeader from "@/views/desktop/pages/DesktopShopPage/components/ShopPageHeader.vue";
import ShopPageSidebar from "@/views/desktop/pages/DesktopShopPage/components/ShopPageSidebar/index.vue";
import ShopPageProductsSkeleton from "@/views/desktop/pages/DesktopShopPage/components/ShopPageProductsSkeleton.vue";
import ShopPageProducts from "@/views/desktop/pages/DesktopShopPage/components/ShopPageProducts.vue";
</script>
<template>
  <section class="container">
    <ShopPageHeader />
    <div class="row">
      <ShopPageSidebar />

      <Suspense>
        <template #default>
          <ShopPageProducts />
        </template>

        <template #fallback>
          <ShopPageProductsSkeleton />
        </template>
      </Suspense>
    </div>
  </section>
</template>
