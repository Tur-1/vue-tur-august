<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="link in links"
        :class="{ active: link.active }"
      >
        <a
          role="button"
          @click="$emit('onPageChange', { url: link.url })"
          class="page-link"
          href="#"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
defineProps(["links"]);

defineEmits(["onPageChange"]);
</script>
