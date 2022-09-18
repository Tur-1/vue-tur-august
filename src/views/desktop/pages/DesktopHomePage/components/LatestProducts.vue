<template>
  <div class="row mt-3">
    <h5 class="section-title"><span>New</span> Arrivals</h5>
    <div class="base-slider">
      <ProductCard
        :products="latestProducts"
        class="col-xl-2 col-lg-2 col-md-4 col-5"
      />
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import ProductCard from "@/views/components/ProductCard/index.vue";

const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
const latestProducts = await res.data;
</script>
