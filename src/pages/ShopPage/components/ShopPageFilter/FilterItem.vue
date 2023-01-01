<script setup>
import FilteredItems from "@/pages/ShopPage/components/ShopPageFilter/FilteredItems.vue";
import { COffcanvas } from "@coreui/vue";
import { ref } from "vue";

const props = defineProps({
  title: String,
  FilteredItems: Array,
});

let isOpen = ref(false);

const openCOffcanvas = () => {
  isOpen.value = true;
};
const closeCOffcanvas = () => {
  isOpen.value = false;
};
</script>
<template>
  <div class="filter-item">
    <button class="filter-item-name" type="button" @click="openCOffcanvas">
      <strong>{{ title }}</strong>
      <i class="bi bi-chevron-right fa-lg"></i>
    </button>
    <div class="filtered-items" v-if="props.FilteredItems">
      <FilteredItems :items="FilteredItems" />
    </div>
  </div>
  <COffcanvas placement="end" :visible="isOpen">
    <div class="offcanvas-header filter-item-offcanvas-header">
      <button type="button" class="bg-transparent" @click="closeCOffcanvas">
        <i class="bi bi-chevron-left fa-lg"></i>
      </button>
      <strong class="offcanvas-title">{{ title }}</strong>
    </div>
    <div class="offcanvas-body filter-item-offcanvas-body">
      <slot />
    </div>
  </COffcanvas>
</template>
