<script setup>
import Brands from "@/pages/ShopPage/components/ShopPageFilter/Brands.vue";
import Colors from "@/pages/ShopPage/components/ShopPageFilter/Colors.vue";
import SizeOptions from "@/pages/ShopPage/components/ShopPageFilter/SizeOptions.vue";
import FilterItem from "@/pages/ShopPage/components/ShopPageFilter/FilterItem.vue";
import useBottomSheet from "@/components/BottomSheet/useBottomSheet";
import BottomSheet from "@/components/BottomSheet/index.vue";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";

const emits = defineEmits(["onFilterProducts"]);

function filterProducts() {
  emits("onFilterProducts");
}

function clearAll() {
  for (const iterator in ProductsFilterStore) {
    ProductsFilterStore[iterator] = [];
  }
  useBottomSheet.close("filter");
}
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
        <button type="button" class="clear-filter-btn" @click="clearAll">
          clear All
        </button>
      </div>
    </template>
    <template #body>
      <FilterItem
        title="brands"
        offcanvasId="brands-filter"
        @onClose="filterProducts"
      >
        <Brands />
      </FilterItem>
      <FilterItem
        title="Colors"
        offcanvasId="colors-filter"
        @onClose="filterProducts"
      >
        <Colors />
      </FilterItem>
      <FilterItem
        title="Size"
        offcanvasId="sizes-filter"
        @onClose="filterProducts"
      >
        <SizeOptions />
      </FilterItem>
    </template>
    <template #footer>
      <button
        type="button"
        @click="useBottomSheet.close('filter')"
        class="btn btn-primary show-products-btn"
      >
        show products ({{ ShopPageStore.pagination?.total }})
      </button>
    </template>
  </BottomSheet>
</template>
