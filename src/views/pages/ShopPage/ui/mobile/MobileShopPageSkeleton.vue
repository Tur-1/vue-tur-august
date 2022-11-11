<script setup>
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
import CategoryCardSkeleton from "@/views/pages/ShopPage/ui/mobile/components/ShopPageCategories/CategoryCardSkeleton.vue";
import ShopPageFilter from "@/views/pages/ShopPage/ui/mobile/components/ShopPageFilter/index.vue";
import SortProducts from "@/views/pages/ShopPage/ui/mobile/components/SortProducts/index.vue";
</script>

<template>
  <section class="shop-page-mobile-section">
    <div class="mobile-shop-page-header">
      <SortProducts />

      <ShopPageFilter />
    </div>
    <div class="mobile-header-categories-warp">
      <div class="mobile-categories-row mb-1">
        <CategoryCardSkeleton />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
          <div class="row">
            <ProductCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
