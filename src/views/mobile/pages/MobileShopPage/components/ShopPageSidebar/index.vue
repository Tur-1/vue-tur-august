<template>
  <!-- <div class="shop-sidebar col-lg-2 col-md-3">
     <Categories />
    <Brands :filters="filters" />
    <Colors :filters="filters" />
    <SizeOptions :filters="filters" /> 
  </div>-->
  <div class="shop-sidebar col-lg-2 col-md-3">
    <ul class="shop-sidebar-categories">
      <li class="shop-sidebar-category-item">
        <a href="https://tur-august.herokuapp.com/shop/women-clothing"
          ><i class="bi bi-caret-right-fill"></i> Clothing</a
        >
      </li>
      <li class="shop-sidebar-category-item">
        <a href="https://tur-august.herokuapp.com/shop/women-bags"
          ><i class="bi bi-caret-right-fill"></i> Bags</a
        >
      </li>
      <li class="shop-sidebar-category-item">
        <a href="https://tur-august.herokuapp.com/shop/women-shoes"
          ><i class="bi bi-caret-right-fill"></i> Shoes</a
        >
      </li>
    </ul>
    <div>
      <label class="fw-600 mb-1 sidebar-border-top">Brand</label>
      <div class="list-group">
        <label class="mb-2"
          ><input
            class="form-check-input me-1"
            type="checkbox"
            name="brand[]"
            id="brand-42"
            value="womens-best"
          /><span>Womens Best (2)</span></label
        ><label class="mb-2"
          ><input
            class="form-check-input me-1"
            type="checkbox"
            name="brand[]"
            id="brand-41"
            value="calvin-klein"
          /><span>Calvin Klein (4)</span></label
        ><label class="mb-2"
          ><input
            class="form-check-input me-1"
            type="checkbox"
            name="brand[]"
            id="brand-40"
            value="tommy-hilfiger"
          /><span>Tommy Hilfiger (4)</span></label
        ><label class="mb-2"
          ><input
            class="form-check-input me-1"
            type="checkbox"
            name="brand[]"
            id="brand-39"
            value="guess"
          /><span>Guess (2)</span></label
        ><label class="mb-2"
          ><input
            class="form-check-input me-1"
            type="checkbox"
            name="brand[]"
            id="brand-37"
            value="puma"
          /><span>Puma (2)</span></label
        ><label class="mb-2"
          ><input
            class="form-check-input me-1"
            type="checkbox"
            name="brand[]"
            id="brand-36"
            value="nike"
          /><span>Nike (2)</span></label
        ><label class="mb-2"
          ><input
            class="form-check-input me-1"
            type="checkbox"
            name="brand[]"
            id="brand-44"
            value="adidas"
          /><span>Adidas (1)</span></label
        >
      </div>
    </div>
    <label class="fw-600 mb-1 sidebar-border-top">Colors</label>
    <div class="list-group">
      <label class="d-flex align-items-center justify-content-between mb-2"
        ><div>
          <input
            class="form-check-input me-1"
            type="checkbox"
            name="color[]"
            id="color-40"
            value="pink"
          /><span>Pink (4)</span>
        </div>
        <img
          src="https://august-images.s3.amazonaws.com/images/colors/1659933051-color_pink_web.webp"
          width="20"
          alt="Black" /></label
      ><label class="d-flex align-items-center justify-content-between mb-2"
        ><div>
          <input
            class="form-check-input me-1"
            type="checkbox"
            name="color[]"
            id="color-38"
            value="blue"
          /><span>Blue (2)</span>
        </div>
        <img
          src="https://august-images.s3.amazonaws.com/images/colors/1659933060-color_blue_web.webp"
          width="20"
          alt="Black" /></label
      ><label class="d-flex align-items-center justify-content-between mb-2"
        ><div>
          <input
            class="form-check-input me-1"
            type="checkbox"
            name="color[]"
            id="color-37"
            value="burgundy"
          /><span>Burgundy (1)</span>
        </div>
        <img
          src="https://august-images.s3.amazonaws.com/images/colors/1659933080-color_burgundy_web.webp"
          width="20"
          alt="Black" /></label
      ><label class="d-flex align-items-center justify-content-between mb-2"
        ><div>
          <input
            class="form-check-input me-1"
            type="checkbox"
            name="color[]"
            id="color-36"
            value="purple"
          /><span>Purple (1)</span>
        </div>
        <img
          src="https://august-images.s3.amazonaws.com/images/colors/1659933089-color_purple_web.webp"
          width="20"
          alt="Black" /></label
      ><label class="d-flex align-items-center justify-content-between mb-2"
        ><div>
          <input
            class="form-check-input me-1"
            type="checkbox"
            name="color[]"
            id="color-35"
            value="beige"
          /><span>Beige (2)</span>
        </div>
        <img
          src="https://august-images.s3.amazonaws.com/images/colors/1659933095-color_beige_web.webp"
          width="20"
          alt="Black" /></label
      ><label class="d-flex align-items-center justify-content-between mb-2"
        ><div>
          <input
            class="form-check-input me-1"
            type="checkbox"
            name="color[]"
            id="color-34"
            value="black"
          /><span>Black (7)</span>
        </div>
        <img
          src="https://august-images.s3.amazonaws.com/images/colors/1659933101-black.webp"
          width="20"
          alt="Black"
      /></label>
    </div>
    <label class="fw-600 mb-1 sidebar-border-top">Size</label>
    <div class="list-group">
      <label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="s" /><span
          >S (15)</span
        ></label
      ><label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="xs" /><span
          >XS (14)</span
        ></label
      ><label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="m" /><span
          >M (8)</span
        ></label
      ><label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="l" /><span
          >L (4)</span
        ></label
      ><label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="38" /><span
          >38 (2)</span
        ></label
      ><label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="39" /><span
          >39 (2)</span
        ></label
      ><label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="40" /><span
          >40 (1)</span
        ></label
      ><label class="mb-2"
        ><input class="form-check-input me-1" type="checkbox" value="41" /><span
          >41 (1)</span
        ></label
      >
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import Categories from "@/views/desktop/pages/DesktopShopPage/components/ShopPageSidebar/Categories.vue";
import Brands from "@/views/desktop/pages/DesktopShopPage/components/ShopPageSidebar/Brands.vue";
import Colors from "@/views/desktop/pages/DesktopShopPage/components/ShopPageSidebar/Colors.vue";
import SizeOptions from "@/views/desktop/pages/DesktopShopPage/components/ShopPageSidebar/SizeOptions.vue";
// import useProductsFilters from "@/Pages/ShopPage/Helpers/useProductsFilters";

// const props = defineProps({
//   categorySlug: String,
//   queryString: Object,
// });

// const { filters, getFilteredProducts } = useProductsFilters(props.queryString);

// watch(filters, (checked) => getFilteredProducts(props.categorySlug), {
//   deep: true,
// });
</script>
