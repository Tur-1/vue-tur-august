<script setup>
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton.vue";
import BannersSkeleton from "@/pages/HomePage/components/BannersSkeleton.vue";
import LargeBanners from "@/pages/HomePage/components/LargeBanners.vue";
import LatestProducts from "@/pages/HomePage/components/LatestProducts.vue";
import MediumBanners from "@/pages/HomePage/components/MediumBanners.vue";
import useHomePageService from "@/pages/HomePage/services/useHomePageService";
import HomePageStore from "@/pages/HomePage/store/HomePageStore";
import { onMounted } from "vue";

const { getHomePageContent } = useHomePageService();
onMounted(getHomePageContent);
</script>
<template>
  <section>
    <div class="container">
      <div class="home-large-banners">
        <LargeBanners v-if="!HomePageStore.onProgress" />

        <BannersSkeleton />
      </div>
      <div class="home-medium-banners">
        <MediumBanners v-if="!HomePageStore.onProgress" />

        <BannersSkeleton v-for="i in 3" />
      </div>

      <LatestProducts v-if="!HomePageStore.onProgress" />

      <div class="row mt-3" v-if="HomePageStore.onProgress">
        <h5 class="section-title"><span>New</span> Arrivals</h5>
        <div class="base-slider">
          <ProductCardSkeleton />
        </div>
      </div>
    </div>
  </section>
</template>
