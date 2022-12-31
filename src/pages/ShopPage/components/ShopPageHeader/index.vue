<template>
  <div class="desktop-shop-page-header">
    <div class="row">
      <div class="col-lg-2 col-md-2">
        <span class="current-category" v-if="!ShopPageStore.onProgress">
          {{ ShopPageStore.category.name }}
        </span>
        <span
          class="current-category placeholder-wave"
          v-if="ShopPageStore.onProgress"
        >
          <span class="placeholder rounded-1 w-50"></span>
        </span>
      </div>
      <div class="col-lg-10">
        <div class="d-flex justify-content-between align-items-center">
          <ShopPageBreadcrumb v-if="!ShopPageStore.onProgress" />
          <ShopPageBreadcrumbSkeleton v-if="ShopPageStore.onProgress" />
          <SortProductsDesktop />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-2 col-md-2">
        <div
          class="text-start text-dark placeholder-wave"
          v-if="ShopPageStore.onProgress"
        >
          <span class="placeholder rounded-1 w-75"></span>
        </div>
        <div
          class="text-start text-dark"
          style="font-size: 12px"
          v-if="!ShopPageStore.onProgress"
        >
          <i class="bi bi-caret-left-fill"></i>
          <Link
            v-if="ShopPageStore.categoryParent.length == 0"
            :to="{
              name: 'home',
            }"
            id="catalog_return"
            class="text-dark"
          >
            Back To Home
          </Link>
          <Link
            v-if="ShopPageStore.categoryParent.length !== 0"
            :to="{
              name: 'shop',
              params: { slug: `${ShopPageStore.categoryParent.slug}` },
            }"
            id="catalog_return"
            class="text-dark"
          >
            Back To {{ ShopPageStore.categoryParent.name }}
          </Link>
        </div>
      </div>
    </div>

    <hr class="mt-0 mb-0" />
  </div>
</template>

<script setup>
import ShopPageBreadcrumbSkeleton from "@/pages/ShopPage/components/ShopPageBreadcrumb/ShopPageBreadcrumbSkeleton.vue";
import ShopPageBreadcrumb from "@/pages/ShopPage/components/ShopPageBreadcrumb/index.vue";
import SortProductsDesktop from "@/pages/ShopPage/components/SortProductsDesktop/index.vue";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
</script>
