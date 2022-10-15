<template>
  <section>
    <CategoriesHeader />

    <Suspense>
      <template #default>
        <CategoriesBody />
      </template>

      <template #fallback>
        <CategoriesSkeleton />
      </template>
    </Suspense>
  </section>
</template>

<script setup>
import CategoriesHeader from "@/views/pages/CategoriesPage/components/CategoriesHeader.vue";
import CategoriesBody from "@/views/pages/CategoriesPage/components/CategoriesBody.vue";
import CategoriesSkeleton from "@/views/pages/CategoriesPage/components/CategoriesSkeleton.vue";
</script>
