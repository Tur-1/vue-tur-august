<template>
  <div class="sort-by-area">
    <div class="sort-by-wrap" @click="showSortDropdown">
      <div class="sort-by">
        <span><i class="bi bi-funnel"></i> Sort by: </span>
      </div>
      <div class="sort-by">
        <span>Suggested <i class="bi bi-chevron-down"></i></span>
      </div>
    </div>
    <ul class="sort-by-dropdown">
      <li v-for="(sort, index) in sortProducts">
        <a
          role="button"
          @click="filterProducts(sort.slug)"
          :class="{
            active: ProductsFilterStore.sort == sort.slug,
          }"
        >
          <i :class="sort.icon"></i> {{ sort.name }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
import ProductsFilterStore from "@/pages/ShopPage/stores/ProductsFilterStore";
import { reactive } from "vue";

const showSortDropdown = () => {
  $(".sort-by-dropdown").slideToggle();
};
const filterProducts = (slug) => {
  ProductsFilterStore.sort = slug;
  showSortDropdown();
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
