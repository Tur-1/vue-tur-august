<template>
  <div class="row mt-3">
    <h5 class="section-title"><span>New</span> Arrivals</h5>
    <div class="base-slider">
      <ProductCard :products="latestProducts" />
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import ProductCard from "@/views/components/ProductCard/index.vue";

const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
const latestProducts = await res.data;
</script>
