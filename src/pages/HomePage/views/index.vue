<script setup>
import LargeBanners from "@/pages/HomePage/components/LargeBanners.vue";
import BannersSkeleton from "@/pages/HomePage/components/BannersSkeleton.vue";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton.vue";
import LatestProducts from "@/pages/HomePage/components/LatestProducts.vue";
import MediumBanners from "@/pages/HomePage/components/MediumBanners.vue";
</script>
<template>
  <section class="">
  
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
