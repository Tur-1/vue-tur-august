<script setup>
import LargeBanners from "@/views/desktop/pages/DesktopHomePage/components/LargeBanners.vue";
import MediumBanners from "@/views/desktop/pages/DesktopHomePage/components/MediumBanners.vue";
import LatestProducts from "@/views/desktop/pages/DesktopHomePage/components/LatestProducts.vue";
import BannersSkeleton from "@/views/desktop/pages/DesktopHomePage/components/BannersSkeleton.vue";
import LatestProductsSkeleton from "@/views/desktop/pages/DesktopHomePage/components/LatestProductsSkeleton.vue";
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
          <LatestProductsSkeleton />
        </template>
      </Suspense>
    </div>
  </section>
</template>
