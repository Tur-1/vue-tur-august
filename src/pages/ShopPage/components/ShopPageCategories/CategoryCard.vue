<template>
  <div class="category-swiper-slide">
    <Link
      class="category-link"
      :class="{
        'active-category-link':
          ShopPageStore.categoryParent.slug == useRoute().params.slug,
      }"
      :to="{
        name: 'shop',
        params: {
          slug: `${ShopPageStore.categoryParent.slug}`,
        },
      }"
    >
      All
    </Link>
    <Link
      v-for="category in ShopPageStore.categoryChildren"
      class="category-link"
      :class="{
        'active-category-link': category.slug == useRoute().params.slug,
      }"
      :to="{
        name: 'shop',
        params: {
          slug: `${category.slug}`,
        },
      }"
    >
      {{ category.name }}
    </Link>
  </div>
</template>

<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import { useRoute } from "vue-router";
</script>
