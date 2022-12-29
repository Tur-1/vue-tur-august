<template>
  <div class="desktop-shop-page-header">
    <div class="row">
      <div class="col-lg-2 col-md-2">
        <span class="current-category"> women </span>
      </div>
      <div class="col-lg-10">
        <div class="d-flex justify-content-between align-items-center">
          <ShopPageBreadcrumb />
          <SortProducts />
        </div>
      </div>
    </div>
    <div class="text-start text-dark" style="font-size: 12px">
      <i class="bi bi-caret-left-fill"></i>
      <Link id="catalog_return" class="text-dark" to="/"> Back To home </Link>
    </div>

    <hr class="mt-0 mb-0" />
  </div>
</template>

<script setup>
import ShopPageBreadcrumb from "@/pages/ShopPage/views/desktop/components/ShopPageBreadcrumb.vue";
import SortProducts from "@/pages/ShopPage/views/desktop/components/SortProducts.vue";
</script>
