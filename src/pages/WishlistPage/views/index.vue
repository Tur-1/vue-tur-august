<template>
  <WishlistPageMobile v-if="isMobile" />
  <WishlistPageDesktop v-if="isDesktop" />
</template>

<script setup>
import WishlistPageMobile from "@/pages/WishlistPage/views/WishlistPageMobile.vue";
import WishlistPageDesktop from "@/pages/WishlistPage/views/WishlistPageDesktop.vue";
import { ref, onMounted } from "vue";
import useWishlistService from "@/pages/WishlistPage/services/useWishlistService";
let isDesktop = ref(true);
let isMobile = ref(false);

const mediaQueryWidth = window.matchMedia("(max-width: 756px)");

if (mediaQueryWidth.matches) {
  isMobile.value = true;
  isDesktop.value = false;
}

const { getUserWishlist } = useWishlistService();
onMounted(getUserWishlist);
</script>
