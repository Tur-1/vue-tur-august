<template>
  <div class="categories-page-header">
    <button
      v-for="(section, index) in sections"
      :key="section.id"
      class="section-tab"
      @click="Tab.openSectionTab(section.id)"
      :class="{
        active: Tab.id == section.id || (index == 0 && Tab.id == 0),
      }"
      type="button"
    >
      {{ section.name }}
    </button>
  </div>
</template>
<script setup>
import { Tab } from "../Helpers/Tab";
import { reactive } from "vue";

const sections = reactive([
  {
    id: 1,
    name: "Women",
    slug: "women",
    link: "http://127.0.0.1:8000/shop/women",
    image_url: "http://127.0.0.1:8000/assets/images/defult-input-image.png",
    active_section_slug: "",
    children: [
      {
        id: 2,
        name: "Clothing",
        slug: "women-clothing",
        link: "http://127.0.0.1:8000/shop/women-clothing",
        image_url: "http://127.0.0.1:8000/assets/images/defult-input-image.png",
        active_section_slug: "",
        children: [
          {
            id: 3,
            name: "T-Shirts",
            slug: "women-clothing-t_shirts",
            link: "http://127.0.0.1:8000/shop/women-clothing-t_shirts",
            image_url:
              "http://127.0.0.1:8000/assets/images/defult-input-image.png",
            active_section_slug: "",
            children: [],
          },
          {
            id: 4,
            name: "Pants",
            slug: "women-clothing-pants",
            link: "http://127.0.0.1:8000/shop/women-clothing-pants",
            image_url:
              "http://127.0.0.1:8000/assets/images/defult-input-image.png",
            active_section_slug: "",
            children: [],
          },
        ],
      },
      {
        id: 9,
        name: "Bags",
        slug: "women-bags",
        link: "http://127.0.0.1:8000/shop/women-bags",
        image_url: "http://127.0.0.1:8000/assets/images/defult-input-image.png",
        active_section_slug: "",
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: "Men",
    slug: "men",
    link: "http://127.0.0.1:8000/shop/men",
    image_url: "http://127.0.0.1:8000/assets/images/defult-input-image.png",
    active_section_slug: "",
    children: [
      {
        id: 6,
        name: "Clothing",
        slug: "men-clothing",
        link: "http://127.0.0.1:8000/shop/men-clothing",
        image_url: "http://127.0.0.1:8000/assets/images/defult-input-image.png",
        active_section_slug: "",
        children: [
          {
            id: 7,
            name: "T-Shirts",
            slug: "men-clothing-t_shirts",
            link: "http://127.0.0.1:8000/shop/men-clothing-t_shirts",
            image_url:
              "http://127.0.0.1:8000/assets/images/defult-input-image.png",
            active_section_slug: "",
            children: [],
          },
        ],
      },
      {
        id: 8,
        name: "Shoes",
        slug: "men-shoes",
        link: "http://127.0.0.1:8000/shop/men-shoes",
        image_url: "http://127.0.0.1:8000/assets/images/defult-input-image.png",
        active_section_slug: "",
        children: [],
      },
    ],
  },
]);
</script>
