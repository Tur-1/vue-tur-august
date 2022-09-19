<template>
  <!-- <div class="sort-by-area">
    <div @click="showSortDropdown" class="sort-by-wrap">
      <div class="sort-by">
        <span>
          <i class="bi bi-funnel"></i>
          Sort by:
        </span>
      </div>
      <div class="sort-by">
        <span>
          {{ $page.props.sortProducts.filter((item) => item.active)[0].name }}
          <i class="bi bi-chevron-down"></i>
        </span>
      </div>
    </div>

    <ul class="sort-by-dropdown">
      <li v-for="(sort, index) in $page.props.sortProducts" :key="index">
        <Link :href="sort.url" :class="{ active: sort.active }">
          <i :class="sort.icon"></i>
          {{ sort.name }}
        </Link>
      </li>
    </ul>
  </div> -->
  <div class="sort-by-area">
    <div class="sort-by-wrap" @click="showSortDropdown">
      <div class="sort-by">
        <span><i class="bi bi-funnel"></i> Sort by: </span>
      </div>
      <div class="sort-by">
        <span>Suggested <i class="bi bi-chevron-down"></i></span>
      </div>
    </div>
    <ul class="sort-by-dropdown">
      <li>
        <a class="active" href="https://tur-august.herokuapp.com/shop/women"
          ><i class="bi bi-card-list me-2"></i> Suggested</a
        >
      </li>
      <li>
        <a class="" href="https://tur-august.herokuapp.com/shop/women?sort=new"
          ><i class="bi bi-fire me-2"></i> new</a
        >
      </li>
      <li>
        <a
          class=""
          href="https://tur-august.herokuapp.com/shop/women?sort=price-high-to-low"
          ><i class="bi bi-sort-up me-2"></i> Price: High to Low</a
        >
      </li>
      <li>
        <a
          class=""
          href="https://tur-august.herokuapp.com/shop/women?sort=price-low-to-high"
          ><i class="bi bi-sort-down-alt me-2"></i> Price: Low to High</a
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const showSortDropdown = () => {
  $(".sort-by-dropdown").slideToggle();
};
</script>
