<script setup>
import useOffcanvas from "@/components/RightOffcanvas/useOffcanvas";
import RightOffcanvas from "@/components/RightOffcanvas/index.vue";

import FilteredItems from "@/pages/ShopPage/components/ShopPageFilter/FilteredItems.vue";

const props = defineProps({
  title: String,
  FilteredItems: Array,
  offcanvasId: String,
});

const emits = defineEmits(["onClose"]);

const close = () => {
  emits("onClose");
};
</script>
<template>
  <div class="filter-item">
    <button
      class="filter-item-name"
      type="button"
      @click="useOffcanvas.open(offcanvasId)"
    >
      <strong class="text-capitalize">{{ title }}</strong>
      <i class="bi bi-chevron-right fa-lg"></i>
    </button>
    <div class="filtered-items" v-if="props.FilteredItems">
      <FilteredItems :items="FilteredItems" />
    </div>
  </div>
  <RightOffcanvas :id="offcanvasId" :title="title" @onClose="close">
    <template #body>
      <slot />
    </template>
  </RightOffcanvas>
</template>
