<template>
  <ol class="breadcrumb" id="shop-desktop-breadcrumb">
    <li class="breadcrumb-item">
      <Link to="/"> Home </Link>
      <i class="bi bi-chevron-right"></i>
    </li>

    <li
      class="breadcrumb-item"
      v-for="(parent, index) in ShopPageStore.categoryParents"
      :key="parent.id"
    >
      <Link :to="{ name: 'shop', params: { slug: parent.slug } }">
        {{ parent.name }}
      </Link>
      <i class="bi bi-chevron-right"></i>
    </li>

    <li class="breadcrumb-item" aria-current="page">
      {{ ShopPageStore.category.name }}
    </li>
  </ol>
</template>
<script setup>
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
</script>
