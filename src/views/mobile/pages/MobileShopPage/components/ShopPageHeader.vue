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
import SortProducts from "@/views/mobile/pages/MobileShopPage/components/SortProducts.vue";
import ShopPageFilter from "@/views/mobile/pages/MobileShopPage/components/ShopPageFilter/index.vue";
</script>
