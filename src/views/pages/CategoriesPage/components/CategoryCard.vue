<template>
  <Link
    class="card-category"
    :to="{
      name: 'shop',
      params: {
        categorySlug: slug,
      },
      meta: {
        title: name,
      },
    }"
  >
    <img loading="lazy" :src="imageUrl ?? defultCardImage" />

    <span> {{ name }} </span>
  </Link>
</template>

<script setup>
import defultCardImage from "@/assets/images/defult-card-image.png";

const props = defineProps({
  name: String,
  slug: String,
  imageUrl: String,
});
</script>
