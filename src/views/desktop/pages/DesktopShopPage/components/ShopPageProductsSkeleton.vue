<template>
  <div class="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
    <div class="row">
      <div
        v-for="n in 10"
        class="col-xl-3 col-lg-4 col-md-4 col-6 mb-4 product-item product-item-skeleton"
      >
        <div class="card product-card placeholder-wave" aria-hidden="true">
          <div class="product-card-image">
            <div class="placeholder bg-secondary"></div>
          </div>

          <div class="card-body placeholder-wave p-1">
            <span class="placeholder col-5"></span>
            <span class="placeholder col-2"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-4 ms-1"></span>

            <span class="placeholder col-3"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
