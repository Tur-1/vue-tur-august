<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item w-100 h-100 active">
        <a href=""
          ><img
            src="https://august-images.s3.amazonaws.com/images/banners/1659936581-banner_5_1920x700_crop_top.jpg"
            class="d-block w-100 h-100"
            alt="..."
        /></a>
      </div>
      <div class="carousel-item w-100 h-100">
        <a href=""
          ><img
            src="https://august-images.s3.amazonaws.com/images/banners/1659936621-main_banner_2_1903x792.jpg"
            class="d-block w-100 h-100"
            alt="..."
        /></a>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span
      ><span class="visually-hidden">Previous</span></button
    ><button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span
      ><span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script setup>
import axios from "axios";

const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
const posts = await res.data;
</script>
