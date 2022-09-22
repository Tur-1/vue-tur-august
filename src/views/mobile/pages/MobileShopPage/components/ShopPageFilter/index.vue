<template>
  <div class="col border-start">
    <button
      class="sort-filter-btns"
      @click="isOpen = true"
      type="button"
      id="mobile-offcanvas-filter-btn"
    >
      <i class="bi bi-funnel-fill"></i><span>Filter</span>
    </button>
  </div>

  <swipe-modal v-model="isOpen" contents-height="55vh" border-top-radius="14px">
    <div class="mobile-filter-products">
      <div class="header">
        <span class="title">Filter</span>
        <button type="button" class="clear-filtered-items-btn">
          clear All
        </button>
      </div>
      <div class="body">
        <FilterItem name="Brands" :FilteredItems="BrandsFilteredItems">
          <Brands />
        </FilterItem>
        <FilterItem name="Colors" :FilteredItems="ColorsFilteredItems">
          <Colors />
        </FilterItem>
        <FilterItem name="Size" :FilteredItems="SizeFilteredItems">
          <SizeOptions />
        </FilterItem>
        <FilterItem name="Price" />
      </div>
    </div>
  </swipe-modal>
</template>

<script setup>
import swipeModal from "@takuma-ru/vue-swipe-modal";
import { COffcanvas } from "@coreui/vue";
import { ref } from "vue";
import FilterItem from "@/views/mobile/pages/MobileShopPage/components/ShopPageFilter/FilterItem.vue";
import Brands from "@/views/mobile/pages/MobileShopPage/components/ShopPageFilter/Brands.vue";
import Colors from "@/views/mobile/pages/MobileShopPage/components/ShopPageFilter/Colors.vue";
import SizeOptions from "@/views/mobile/pages/MobileShopPage/components/ShopPageFilter/SizeOptions.vue";

let isOpen = ref(false);

let BrandsFilteredItems = ["puma", "nike"];
let ColorsFilteredItems = ["black", "white"];
let SizeFilteredItems = ["S", "M"];
</script>
