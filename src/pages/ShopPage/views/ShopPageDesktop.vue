<script setup>
import ShopPageHeader from "@/pages/ShopPage/components/ShopPageHeader/index.vue";
import ShopPageSidebar from "@/pages/ShopPage/components/ShopPageSidebar/index.vue";
import ShopPageSidebarSkeleton from "@/pages/ShopPage/components/ShopPageSidebar/ShopPageSidebarSkeleton.vue";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton.vue";
import NoProductsFound from "@/pages/ShopPage/components/NoProductsFound/index.vue";
import ProductCard from "@/components/ProductCard/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";

const { getCategoryPageContent } = useShopPageService();
</script>
<template>
  <section class="container">
    <ShopPageHeader />
    <div class="row">
      <div class="col-lg-2 col-md-3">
        <ShopPageSidebar v-if="!ShopPageStore.onProgress" />

        <ShopPageSidebarSkeleton v-if="ShopPageStore.onProgress" />
      </div>
      <div class="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
        <div class="row">
          <ProductCard
            :products="ShopPageStore.products.list"
            v-if="!ShopPageStore.onProgress"
          />
          <ProductCardSkeleton v-if="ShopPageStore.onProgress" />
        </div>
        <div class="d-flex justify-content-center">
          <Pagination
            :links="ShopPageStore.products.pagination"
            @onPageChange="getCategoryPageContent"
          />
        </div>
        <NoProductsFound :show="false" />
      </div>
    </div>
  </section>
</template>
