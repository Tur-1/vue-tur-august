<script setup>
import ShopPageHeader from "@/pages/ShopPage/components/ShopPageHeader/index.vue";
import ShopPageSidebar from "@/pages/ShopPage/components/ShopPageSidebar/index.vue";
import ShopPageProducts from "@/pages/ShopPage/components/ShopPageProducts/index.vue";
import useShopPageService from "@/pages/ShopPage/services/useShopPageService";
import { onMounted } from "vue";
import ShopPageSidebarSkeleton from "@/pages/ShopPage/components/ShopPageSidebar/ShopPageSidebarSkeleton.vue";
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import useRouterService from "@/router/useRouterService";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton.vue";
import NoProductsFound from "@/pages/ShopPage/components/NoProductsFound/index.vue";
import ProductCard from "@/components/ProductCard/index.vue";

const { getCategoryPageContent } = useShopPageService();

onMounted(async () => {
  await getCategoryPageContent();

  useRouterService.setPageTitle(ShopPageStore.category.name);
});
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
        <NoProductsFound :show="false" />
      </div>
    </div>
  </section>
</template>
