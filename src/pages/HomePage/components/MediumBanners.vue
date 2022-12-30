<template>
  <div class="mb-3">
    <a href=""
      ><img
        src=""
        class="w-100"
        alt="..."
    /></a>
  </div>
  <div class="mb-3">
    <a href=""
      ><img
        src=""
        class="w-100"
        alt="..."
    /></a>
  </div>
  <div class="mb-3">
    <a href=""
      ><img
        src=""
        class="w-100"
        alt="..."
    /></a>
  </div>
  <div class="mb-3">
    <a href=""
      ><img
        src=""
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
