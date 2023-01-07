<template>
  <div class="col">
    <button
      class="sort-filter-btns"
      type="button"
      @click="useBottomSheet.open('sort-products')"
    >
      <span>sort</span>
    </button>
  </div>

  <BottomSheet id="sort-products" height="35vh">
    <template #header>
      <span class="sort-products-title">Sort</span>
    </template>
    <template #body>
      <div class="mobile-sort-products">
        <div class="body">
          <div class="list-group">
            <a
              role="button"
              v-for="(sort, index) in sortProducts"
              class="text-dark list-group-item"
              @click="filterProducts(sort.slug)"
            >
              <div>
                <i :class="sort.icon"></i>
                {{ sort.name }}
              </div>
              <div class="circle-wrap">
                <span
                  :class="{
                    'active-sort': ProductsFilterStore.sort == sort.slug,
                  }"
                ></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </template>
  </BottomSheet>
</template>
<script setup>
import useBottomSheet from "@/components/BottomSheet/useBottomSheet";
import BottomSheet from "@/components/BottomSheet/index.vue";
import { reactive } from "vue";
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";

const emits = defineEmits(["onFilterProducts"]);
const filterProducts = (slug) => {
  ProductsFilterStore.sort = slug;
  useBottomSheet.close("sort-products");
  emits("onFilterProducts");
};

let sortProducts = reactive([
  {
    id: "1",
    name: "Suggested",
    slug: "",
    icon: "bi bi-card-list me-2",
  },
  {
    id: "2",
    name: "new",
    slug: "new",
    icon: "bi bi-fire me-2",
  },
  {
    id: "3",
    name: "Price: High to Low",
    slug: "price-high-to-low",
    icon: "bi bi-sort-up me-2",
  },
  {
    id: "4",
    name: "Price: Low to High",
    slug: "price-low-to-high",
    icon: "bi bi-sort-down-alt me-2",
  },
]);
</script>
