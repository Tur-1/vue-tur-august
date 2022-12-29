<script setup>
import Brands from "@/pages/ShopPage/views/mobile/components/ShopPageFilter/Brands.vue";
import Colors from "@/pages/ShopPage/views/mobile/components/ShopPageFilter/Colors.vue";
import SizeOptions from "@/pages/ShopPage/views/mobile/components/ShopPageFilter/SizeOptions.vue";
import FilterItem from "@/pages/ShopPage/views/mobile/components/ShopPageFilter/FilterItem.vue";
import useBottomSheet from "@/views/components/BottomSheet/useBottomSheet";
import BottomSheet from "@/views/components/BottomSheet/index.vue";
</script>

<template>
  <div class="col border-start">
    <button
      class="sort-filter-btns"
      @click="useBottomSheet.open('filter')"
      type="button"
      id="mobile-offcanvas-filter-btn"
    >
      <i class="bi bi-funnel-fill"></i><span>Filter</span>
    </button>
  </div>

  <BottomSheet id="filter">
    <template #header>
      <div class="mobile-filter-header">
        <span class="title">Filter</span>
        <button type="button" class="clear-filter-btn">clear All</button>
      </div>
    </template>
    <template #body>
      <FilterItem title="Brands">
        <Brands />
      </FilterItem>
      <FilterItem title="Colors">
        <Colors />
      </FilterItem>
      <FilterItem title="Size ">
        <SizeOptions />
      </FilterItem>
    </template>
    <template #footer>
      <button type="button" class="btn btn-primary show-products-btn">
        show products (56)
      </button>
    </template>
  </BottomSheet>
</template>
