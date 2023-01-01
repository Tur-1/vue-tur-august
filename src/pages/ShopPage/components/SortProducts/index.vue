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
              v-for="(sort, index) in sortProducts"
              class="text-dark list-group-item"
            >
              <div>
                <i :class="sort.icon"></i>
                {{ sort.name }}
              </div>
              <div class="circle-wrap">
                <span :class="{ 'active-sort': index == 0 }"></span>
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

let sortProducts = reactive([
  {
    id: "1",
    name: "Suggested",
    icon: "bi bi-card-list me-2",
  },
  {
    id: "2",
    name: "new",
    icon: "bi bi-fire me-2",
  },
  {
    id: "1",
    name: "Price: High to Low",
    icon: "bi bi-sort-up me-2",
  },
  {
    id: "2",
    name: "Price: Low to High",
    icon: "bi bi-sort-down-alt me-2",
  },
]);
</script>
