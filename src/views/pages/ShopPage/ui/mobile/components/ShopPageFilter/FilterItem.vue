<template>
  <div class="filter-item">
    <button
      class="filter-item-name"
      type="button"
      @click="
        () => {
          visibleEnd = !visibleEnd;
        }
      "
    >
      <strong>{{ name }}</strong>
      <i class="bi bi-chevron-right fa-lg"></i>
    </button>
    <div class="filtered-items" v-if="FilteredItems">
      <FilteredItemCard :FilteredItems="FilteredItems" />
    </div>
  </div>

  <COffcanvas
    placement="end"
    :visible="visibleEnd"
    @hide="
      () => {
        visibleEnd = !visibleEnd;
      }
    "
  >
    <div class="offcanvas-header filter-item-offcanvas-header">
      <button
        type="button"
        class="bg-transparent"
        @click="
          () => {
            visibleEnd = false;
          }
        "
      >
        <i class="bi bi-chevron-left fa-lg"></i>
      </button>
      <strong class="offcanvas-title">{{ name }}</strong>
    </div>
    <div class="offcanvas-body filter-item-offcanvas-body">
      <slot />
    </div>
  </COffcanvas>
</template>
<script setup>
import { COffcanvas } from "@coreui/vue";
import { ref } from "vue";

import FilteredItemCard from "./FilteredItemCard.vue";

let visibleEnd = ref(false);
const props = defineProps({
  name: String,
  FilteredItems: Array,
});
</script>
