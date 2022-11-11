<template>
  <div class="col">
    <button
      class="sort-filter-btns"
      type="button"
      @click="useBottomSheet.open('sort-products')"
    >
      <span>sort</span>
    </button>
  </div>

  <BottomSheet id="sort-products" height="35vh">
    <template #header>
      <span class="sort-products-title">Sort</span>
    </template>
    <template #body>
      <div class="mobile-sort-products">
        <div class="body">
          <div class="list-group">
            <a
              class="text-dark list-group-item"
              href="https://tur-august.herokuapp.com/shop/women-clothing"
              ><div><i class="bi bi-card-list me-2"></i> Suggested</div>
              <div class="circle-wrap">
                <span class="active-sort"></span></div></a
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
    </template>
  </BottomSheet>
</template>
<script setup>
import useBottomSheet from "@/views/components/BottomSheet/useBottomSheet";
import BottomSheet from "@/views/components/BottomSheet/index.vue";
</script>
