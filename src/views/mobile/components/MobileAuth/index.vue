<template>
  <swipe-modal v-model="isOpen" contents-height="85vh" border-top-radius="14px">
    <div class="header text-center pb-2">
      <h5>AUGUST</h5>
    </div>
    <Auth />
  </swipe-modal>
</template>
<script setup>
import { ref } from "vue";
import Auth from "@/views/Auth/index.vue";
import BaseModal from "@/views/components/BaseModal/index.vue";

import swipeModal from "@takuma-ru/vue-swipe-modal";

let isOpen = ref(false);
</script>
