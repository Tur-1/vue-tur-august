<template>
  <div class="mobile-categories-row mb-1">
    <CategoryCard v-if="!ShopPageStore.onProgress" />

    <CategoryCardSkeleton v-if="ShopPageStore.onProgress" />
  </div>
</template>

<script setup>
import CategoryCardSkeleton from "@/pages/ShopPage/components/ShopPageCategories/CategoryCardSkeleton.vue";
import CategoryCard from "@/pages/ShopPage/components/ShopPageCategories/CategoryCard.vue";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
</script>
