<script setup>
import MyAccountHeader from "@/pages/MyAccountPage/views/desktop/components/MyAccountHeader.vue";
import MyAccountTabsbuttons from "@/pages/MyAccountPage/views/desktop/components/MyAccountTabsbuttons.vue";
import MyAccountTabsContent from "@/pages/MyAccountPage/views/desktop/components/MyAccountTabsContent.vue";
</script>
<template>
  <section class="container mb-5 mt-5">
    <MyAccountHeader />

    <MyAccountTabsbuttons />
    <MyAccountTabsContent />
  </section>
</template>
