<template>
  <header class="desktop-navbar">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <h3 class="navbar-brand">
          <Link class="text-dark" to="/"> August </Link>
        </h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                :class="{ active: route.name == 'home' }"
                :to="{ name: 'home' }"
              >
                Home
              </Link>
            </li>
            <li class="nav-item" v-for="section in SectionsStore.list">
              <RouterLink
                :to="{
                  name: 'shop',
                  params: {
                    slug: section.slug,
                  },
                }"
                :class="{ active: section.slug == route.params.slug }"
              >
                {{ section.name }}
              </RouterLink>
            </li>
          </ul>

          <div class="nav-icons-container">
            <Link to="/" class="nav-icons">
              <img
                class="svgInject"
                alt="Evara"
                src="@/assets/icons/account.svg"
              />
            </Link>
            <Link class="nav-icons" :to="{ name: 'wishlist' }">
              <img
                class="svgInject"
                alt="Evara"
                src="@/assets/icons/icon-heart.svg"
              />
            </Link>
            <Link class="nav-icons" to="/">
              <img alt="Evara" src="@/assets/icons/icon-cart.svg" />
              <span class="badge badge-circle"> 3 </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import useLayoutService from "@/layouts/services/useLayoutService";
import SectionsStore from "@/layouts/stores/SectionsStore";

import { onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
const { getSections } = useLayoutService();

const route = useRoute();
onMounted(getSections);
</script>
