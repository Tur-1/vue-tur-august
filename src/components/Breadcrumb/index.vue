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
            <Link :to="{ name: 'shop', params: { slug: category.slug } }">
              {{ category.name }}</Link
            >
            <i class="bi bi-chevron-right"></i>
          </div>
          <span class="current-breadcrumb-item"> {{ active }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  active: String,
  categories: {
    type: Array,
    default: [],
  },
});
</script>
