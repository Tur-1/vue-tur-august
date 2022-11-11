<template>
  <Suspense>
    <template #default>
      <section>
        <CategoriesHeader />
        <CategoriesBody />
      </section>
    </template>

    <template #fallback>
      <section>
        <CategoriesSkeleton />
      </section>
    </template>
  </Suspense>
</template>

<script setup>
import CategoriesHeader from "@/views/pages/CategoriesPage/components/CategoriesHeader.vue";
import CategoriesBody from "@/views/pages/CategoriesPage/components/CategoriesBody.vue";
import CategoriesSkeleton from "@/views/pages/CategoriesPage/components/CategoriesSkeleton.vue";
</script>
