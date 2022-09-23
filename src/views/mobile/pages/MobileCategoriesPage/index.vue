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
import CategoriesHeader from "@/views/mobile/pages/MobileCategoriesPage/components/CategoriesHeader.vue";
import CategoriesBody from "@/views/mobile/pages/MobileCategoriesPage/components/CategoriesBody.vue";
import CategoriesSkeleton from "@/views/mobile/pages/MobileCategoriesPage/components/CategoriesSkeleton.vue";
</script>
