<template>
  <div class="row justify-content-center text-center mt-5" v-show="show">
    <h4 class="mb-3">Your Shopping Bag is Empty</h4>

    <Link to="/">CONTINUE SHOPPING</Link>
  </div>
</template>
<script setup>
defineProps(["show"]);
</script>
