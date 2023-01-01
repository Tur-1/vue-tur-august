<template>
  <section v-if="!CategoriesPageStore.onProgress">
    <CategoriesHeader />
    <CategoriesBody />
  </section>
  <section v-if="CategoriesPageStore.onProgress">
    <CategoriesSkeleton />
  </section>
</template>

<script setup>
import CategoriesHeader from "@/pages/CategoriesPage/components/CategoriesHeader.vue";
import CategoriesBody from "@/pages/CategoriesPage/components/CategoriesBody.vue";
import CategoriesPageStore from "@/pages/CategoriesPage/store/CategoriesPageStore";
import CategoriesSkeleton from "@/pages/CategoriesPage/components/CategoriesSkeleton.vue";
import useCategoriesPageService from "@/pages/CategoriesPage/services/useCategoriesPageService";
import { onMounted } from "vue";

const { getAllCategories } = useCategoriesPageService();

onMounted(getAllCategories);
</script>
