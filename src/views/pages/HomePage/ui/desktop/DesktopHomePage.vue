<script setup>
import LargeBanners from "@/views/pages/HomePage/ui/desktop/components/LargeBanners.vue";
import MediumBanners from "@/views/pages/HomePage/ui/desktop/components/MediumBanners.vue";
import LatestProducts from "@/views/pages/HomePage/ui/desktop/components/LatestProducts.vue";
import BannersSkeleton from "@/views/pages/HomePage/ui/desktop/components/BannersSkeleton.vue";
import LatestProductsSkeleton from "@/views/pages/HomePage/ui/desktop/components/LatestProductsSkeleton.vue";
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
          <LatestProductsSkeleton />
        </template>
      </Suspense>
    </div>
  </section>
</template>
