<script setup>
import LargeBanners from "@/views/pages/HomePage/ui/mobile/components/LargeBanners.vue";

import BannersSkeleton from "@/views/pages/HomePage/ui/mobile/components/BannersSkeleton.vue";
import ProductCardSkeleton from "@/views/components/ProductCard/ProductCardSkeleton.vue";
import LatestProducts from "@/views/pages/HomePage/ui/mobile/components/LatestProducts.vue";
import MediumBanners from "@/views/pages/HomePage/ui/mobile/components/MediumBanners.vue";
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
