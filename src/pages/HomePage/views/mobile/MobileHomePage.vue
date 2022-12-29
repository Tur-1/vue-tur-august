<script setup>
import LargeBanners from "@/pages/HomePage/views/mobile/components/LargeBanners.vue";

import BannersSkeleton from "@/pages/HomePage/views/mobile/components/BannersSkeleton.vue";
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
import LatestProducts from "@/pages/HomePage/views/mobile/components/LatestProducts.vue";
import MediumBanners from "@/pages/HomePage/views/mobile/components/MediumBanners.vue";
</script>
<template>
  <section>
    <div class="container">
      <div class="home-large-banners">
        <Suspense>
          <template #default>
            <LargeBanners />
          </template>

          <template #fallback>
            <BannersSkeleton />
          </template>
        </Suspense>
      </div>
      <div class="home-medium-banners">
        <Suspense>
          <template #default>
            <MediumBanners />
          </template>

          <template #fallback>
            <div>
              <BannersSkeleton />
              <BannersSkeleton />
              <BannersSkeleton />
              <BannersSkeleton />
            </div>
          </template>
        </Suspense>
      </div>
      <Suspense>
        <template #default>
          <LatestProducts />
        </template>

        <template #fallback>
          <div class="row mt-3">
            <h5 class="section-title"><span>New</span> Arrivals</h5>
            <div class="base-slider">
              <ProductCardSkeleton />
            </div>
          </div>
        </template>
      </Suspense>
    </div>
  </section>
</template>
