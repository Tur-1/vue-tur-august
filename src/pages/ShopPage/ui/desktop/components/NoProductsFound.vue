<template>
    <div v-show="show" class="justify-content-center text-center">
        <h5>No Products Found</h5>
    </div>
</template>

<script setup>
defineProps(["show"]);
</script>
