<template>
  <ul class="shop-sidebar-categories">
    <li
      class="shop-sidebar-category-item"
      v-for="(category, index) in ShopPageStore.categoryChildren"
      :key="index"
    >
      <Link :to="{ name: 'shop', params: { slug: category.slug } }">
        <i class="bi bi-caret-right-fill"></i>
        {{ category.name }}
      </Link>
    </li>
  </ul>
</template>
<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
</script>
