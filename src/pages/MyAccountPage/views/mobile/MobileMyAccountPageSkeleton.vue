<script setup>
import AvatarSkeleton from "@/pages/MyAccountPage/views/mobile/components/MyAccountAvatar/AvatarSkeleton.vue";
</script>
<template>
  <section>
    <AvatarSkeleton />

    <ul class="account-items">
      <li v-for="placeholder in 4">
        <button
          role="button"
          class="text-dark placeholder-wave account-item-placeholder"
        >
          <span class="placeholder icon"> </span>
          <div class="d-flex align-items-center placeholder item"></div>
        </button>
      </li>
    </ul>
  </section>
</template>
