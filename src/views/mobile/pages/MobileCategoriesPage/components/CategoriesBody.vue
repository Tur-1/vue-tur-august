<template>
  <div class="categories-page-body">
    <div
      v-for="(section, sectionIndex) in sections"
      :key="section.id"
      class="section-content"
      :class="{
        active_section_content:
          Tab.id == section.id || (sectionIndex == 0 && Tab.id == 0),
      }"
    >
      <div class="categories-sidebar">
        <button
          v-for="(category, categoryIndex) in section.children"
          :key="category.id"
          type="button"
          @click="Tab.openCategoryContent(category.id)"
          :class="{
            active:
              category.id == Tab.categoryId || categoryIndex == Tab.categoryId,
          }"
        >
          {{ category.name }}
        </button>
      </div>
      <div
        class="categories-content"
        v-for="(category, categoryIndex) in section.children"
        :key="category.id"
        :class="{
          content_active:
            category.id == Tab.categoryId || categoryIndex == Tab.categoryId,
        }"
      >
        <Link class="card-category" :to="category.link">
          <img loading="lazy" :src="category.image_url" />

          <span> view all </span>
        </Link>
        <Link
          class="card-category"
          v-for="(subcategory, subcategoryIndex) in category.children"
          :key="subcategory.id"
          :to="subcategory.link"
        >
          <img :src="subcategory.image_url" />

          <span> {{ subcategory.name }} </span>
        </Link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { Tab } from "../Helpers/Tab";
import axios from "axios";

const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
const latestProducts = await res.data;
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
