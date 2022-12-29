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
import CategoriesHeader from "@/pages/CategoriesPage/components/CategoriesHeader.vue";
import CategoriesBody from "@/pages/CategoriesPage/components/CategoriesBody.vue";
import CategoriesSkeleton from "@/pages/CategoriesPage/components/CategoriesSkeleton.vue";
</script>
