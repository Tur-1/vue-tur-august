<template>
  <div class="mobile-shop-page-header">
    <div class="col">
      <button class="sort-filter-btns" type="button" @click="open = true">
        <span>sort</span>
      </button>
    </div>

    <div class="col border-start">
      <button
        class="sort-filter-btns"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobile-offcanvas-filter"
        aria-controls="mobile-offcanvas-filter"
        type="button"
        id="mobile-offcanvas-filter-btn"
      >
        <i class="bi bi-funnel-fill"></i><span>Filter</span>
      </button>
    </div>
  </div>

  <div class="mobile-header-categories-warp">
    <div class="mobile-categories-row mb-1">
      <div class="swiper-slide">
        <a
          class="category-link active-category-link"
          href="https://tur-august.herokuapp.com/shop/women-clothing"
          >Clothing</a
        >
      </div>
      <div class="swiper-slide">
        <a
          class="category-link"
          href="https://tur-august.herokuapp.com/shop/women-clothing-t_shirts_vests"
          >T-Shirts &amp; Vests</a
        >
      </div>
    </div>
  </div>

  <swipe-modal v-model="open" contents-height="65vh" border-top-radius="14px">
    <button @click="otherOpen = true">contents</button>
  </swipe-modal>
  <swipe-modal
    v-model="otherOpen"
    contents-height="65vh"
    border-top-radius="14px"
  >
    <p>otherOpen contents</p>
  </swipe-modal>
</template>

<script setup>
import { ref } from "vue";
import swipeModal from "@takuma-ru/vue-swipe-modal";
let open = ref(false);

let otherOpen = ref(false);
</script>
