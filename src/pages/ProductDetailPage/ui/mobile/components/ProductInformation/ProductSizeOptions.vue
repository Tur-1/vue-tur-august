<template>
  <!-- <div class="attr-size">
        <strong class="me-3">Size</strong>
        <ul class="size-filter">
            <li v-for="(size, index) in $page.props.sizeOptions" :key="index">
                <input
                    type="radio"
                    name="size"
                    :value="size.id"
                    @change="ProductSize.getSizeId(size.id)"
                    class="btn-check"
                    :id="'size-' + size.id"
                />
                <label class="btn" :for="'size-' + size.id">{{
                    size.name
                }}</label>
            </li>
        </ul>
    </div> -->
  <div class="attr-size">
    <strong class="me-3">Size</strong>
    <ul class="size-filter">
      <li>
        <input
          type="radio"
          name="size"
          class="btn-check"
          id="size-1"
          value="1"
        /><label class="btn" for="size-1">S</label>
      </li>
      <li>
        <input
          type="radio"
          name="size"
          class="btn-check"
          id="size-2"
          value="2"
        /><label class="btn" for="size-2">XS</label>
      </li>
      <li>
        <input
          type="radio"
          name="size"
          class="btn-check"
          id="size-3"
          value="3"
        /><label class="btn" for="size-3">M</label>
      </li>
    </ul>
  </div>
</template>
<script setup>
// import { ProductSize } from "@/Pages/ProductDetailPage/store";
</script>
