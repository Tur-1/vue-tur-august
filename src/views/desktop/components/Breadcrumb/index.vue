<template>
  <div class="breadcrumb-wrap">
    <div class="container">
      <div class="row">
        <div class="breadcrumb text-wrap">
          <div class="breadcrumb-item">
            <Link to="/"> Home</Link>
            <i class="bi bi-chevron-right"></i>
          </div>
          <div
            v-if="categories"
            v-for="(category, index) in categories"
            :key="index"
            class="breadcrumb-item"
          >
            <Link :to="category.link"> {{ category.name }}</Link>
            <i class="bi bi-chevron-right"></i>
          </div>
          <span class="current-breadcrumb-item"> {{ pageTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  pageTitle: String,

  categories: [],
});
</script>
