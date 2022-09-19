<template>
  <div class="mb-3">
    <a href=""
      ><img
        src="https://august-images.s3.amazonaws.com/images/banners/1659936670-module_01_en_4.jpg"
        class="w-100"
        alt="..."
    /></a>
  </div>
  <div class="mb-3">
    <a href=""
      ><img
        src="https://august-images.s3.amazonaws.com/images/banners/1659936687-module_01_en_5.jpg"
        class="w-100"
        alt="..."
    /></a>
  </div>
  <div class="mb-3">
    <a href=""
      ><img
        src="https://august-images.s3.amazonaws.com/images/banners/1659936727-module_01_en_3.jpg"
        class="w-100"
        alt="..."
    /></a>
  </div>
  <div class="mb-3">
    <a href=""
      ><img
        src="https://august-images.s3.amazonaws.com/images/banners/1659936758-download.jpg"
        class="w-100"
        alt="..."
    /></a>
  </div>
</template>
<script setup>
import axios from "axios";

const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
const posts = await res.data;
</script>
