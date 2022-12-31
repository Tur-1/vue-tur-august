<template>
  <div class="shop-sidebar">
    <Categories />
    <Brands />
    <Colors />
    <SizeOptions />
  </div>
</template>

<script setup>
import Colors from "@/pages/ShopPage/components/ShopPageSidebar/Colors.vue";
import Brands from "@/pages/ShopPage/components/ShopPageSidebar/Brands.vue";
import Categories from "@/pages/ShopPage/components/ShopPageSidebar/Categories.vue";
import SizeOptions from "@/pages/ShopPage/components/ShopPageSidebar/SizeOptions.vue";
import { watch } from "vue";
// import useProductsFilters from "@/Pages/ShopPage/Helpers/useProductsFilters";

// const props = defineProps({
//   categorySlug: String,
//   queryString: Object,
// });

// const { filters, getFilteredProducts } = useProductsFilters(props.queryString);

// watch(filters, (checked) => getFilteredProducts(props.categorySlug), {
//   deep: true,
// });
</script>
