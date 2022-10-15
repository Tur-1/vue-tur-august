<template>
  <div class="col">
    <button class="sort-filter-btns" type="button" @click="isOpen = true">
      <span>sort</span>
    </button>
  </div>

  <swipe-modal v-model="isOpen" contents-height="34vh" border-top-radius="14px">
    <div class="mobile-sort-products">
      <div class="header">
        <span class="title">Sort</span>
      </div>
      <div class="body">
        <div class="list-group">
          <a
            class="text-dark list-group-item"
            href="https://tur-august.herokuapp.com/shop/women-clothing"
            ><div><i class="bi bi-card-list me-2"></i> Suggested</div>
            <div class="circle-wrap"><span class="active-sort"></span></div></a
          ><a
            class="text-dark list-group-item"
            href="https://tur-august.herokuapp.com/shop/women-clothing?sort=new"
            ><div><i class="bi bi-fire me-2"></i> new</div>
            <div class="circle-wrap"><span class=""></span></div></a
          ><a
            class="text-dark list-group-item"
            href="https://tur-august.herokuapp.com/shop/women-clothing?sort=price-high-to-low"
            ><div><i class="bi bi-sort-up me-2"></i> Price: High to Low</div>
            <div class="circle-wrap"><span class=""></span></div></a
          ><a
            class="text-dark list-group-item"
            href="https://tur-august.herokuapp.com/shop/women-clothing?sort=price-low-to-high"
            ><div>
              <i class="bi bi-sort-down-alt me-2"></i> Price: Low to High
            </div>
            <div class="circle-wrap"><span class=""></span></div
          ></a>
        </div>
      </div>
    </div>
  </swipe-modal>
</template>
<script setup>
import swipeModal from "@takuma-ru/vue-swipe-modal";

import { ref } from "vue";

let isOpen = ref(false);
</script>
