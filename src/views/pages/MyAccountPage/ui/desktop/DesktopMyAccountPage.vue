<script setup>
import MyAccountHeader from "@/views/pages/MyAccountPage/ui/desktop/components/MyAccountHeader.vue";
import MyAccountTabsbuttons from "@/views/pages/MyAccountPage/ui/desktop/components/MyAccountTabsbuttons.vue";
import MyAccountTabsContent from "@/views/pages/MyAccountPage/ui/desktop/components/MyAccountTabsContent.vue";
</script>
<template>
  <section class="container mb-5 mt-5">
    <MyAccountHeader />

    <MyAccountTabsbuttons />
    <MyAccountTabsContent />
  </section>
</template>
