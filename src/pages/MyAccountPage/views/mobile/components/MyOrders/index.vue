<script setup>
import RightOffcanvas from "@/components/RightOffcanvas/index.vue";
</script>
<template>
  <li>
    <button
      data-bs-toggle="offcanvas"
      data-bs-target="#my-orders-offcanvas"
      role="button"
      class="text-dark"
    >
      <i class="bi bi-box-seam pb-2 me-2"></i>

      <div
        class="d-flex justify-content-between align-items-center w-100 border-bottom pb-2"
      >
        <span class="account-item-title">My orders</span>
        <i class="bi bi-chevron-right"></i>
      </div>
    </button>
  </li>
  <RightOffcanvas title="My orders" id="my-orders-offcanvas"> </RightOffcanvas>
</template>
