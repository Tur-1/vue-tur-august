<script setup>
import { ref } from "vue";
import SearchBox from "@/views/layouts/mobile/components/SearchBar/SearchBox.vue";
import SearchContent from "@/views/layouts/mobile/components/SearchBar/SearchContent.vue";

let isShown = ref(false);
</script>
<template>
  <SearchBox />
  <SearchContent :isShown="isShown" />
</template>
