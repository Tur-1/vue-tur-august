<script setup>
import SearchBox from "@/views/mobile/layouts/components/SearchBar/SearchBox.vue";
import SearchContent from "@/views/mobile/layouts/components/SearchBar/SearchContent.vue";
import { ref } from "vue";

let isShown = ref(false);
</script>
<template>
  <SearchBox />
  <SearchContent :isShown="isShown" />
</template>
