<script setup>
import MyAccountHeader from "@/views/desktop/pages/DesktopMyAccountPage/components/MyAccountHeader.vue";
import MyAccountTabsbuttons from "@/views/desktop/pages/DesktopMyAccountPage/components/MyAccountTabsbuttons.vue";
import MyAccountTabsContent from "@/views/desktop/pages/DesktopMyAccountPage/components/MyAccountTabsContent.vue";
</script>
<template>
  <section class="container mb-5 mt-5">
    <MyAccountHeader />

    <MyAccountTabsbuttons />
    <MyAccountTabsContent />
  </section>
</template>
