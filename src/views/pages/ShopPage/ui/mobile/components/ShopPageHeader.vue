<template>
  <div class="mobile-shop-page-header">
    <SortProducts />

    <ShopPageFilter />
  </div>

  <div class="mobile-header-categories-warp">
    <div class="mobile-categories-row mb-1">
      <div class="swiper-slide">
        <a
          class="category-link active-category-link"
          href="https://tur-august.herokuapp.com/shop/women-clothing"
          >Clothing</a
        >
      </div>
      <div class="swiper-slide">
        <a
          class="category-link"
          href="https://tur-august.herokuapp.com/shop/women-clothing-t_shirts_vests"
          >T-Shirts &amp; Vests</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import ShopPageFilter from "@/views/pages/ShopPage/ui/mobile/components/ShopPageFilter/index.vue";
import SortProducts from "@/views/pages/ShopPage/ui/mobile/components/SortProducts.vue";
</script>
