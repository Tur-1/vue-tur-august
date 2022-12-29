<template>
  <header class="mobile-header">
    <nav class="navigation">
      <div class="nav-back-button" v-if="route.meta.previousPage">
        <Link :to="route.meta.previousPage">
          <i class="fa-solid fa-arrow-left-long"></i>
        </Link>
      </div>
      <span class="page-title" v-if="!route.meta.hidePageTitle">
        {{ route.meta.title }}
      </span>
      <SearchBar />
    </nav>
  </header>
</template>
<script setup>
import { useRoute } from "vue-router";
import SearchBar from "@/views/layouts/mobile/components/SearchBar/index.vue";

const route = useRoute();
</script>
