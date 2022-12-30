<template>
  <div class="category-swiper-slide">
    <Link
      class="category-link"
      :class="{ 'active-category-link': ShopPageStore.category.active }"
      :to="{
        name: 'shop',
        params: {
          categorySlug: ShopPageStore.category.slug,
        },
      }"
    >
      All
    </Link>
    <Link
      v-for="category in ShopPageStore.category.children"
      class="category-link"
      :class="{ 'active-category-link': category.active }"
      :to="{
        name: 'shop',
        params: {
          categorySlug: category.slug,
        },
      }"
    >
      {{ category.name }}
    </Link>
  </div>
</template>

<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
console.log(ShopPageStore.category);
</script>
