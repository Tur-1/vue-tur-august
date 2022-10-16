<script setup>
import RightOffcanvas from "@/views/components/RightOffcanvas/index.vue";
</script>
<template>
  <li>
    <button
      data-bs-toggle="offcanvas"
      data-bs-target="#address-book-offcanvas"
      role="button"
      class="text-dark"
    >
      <i class="bi bi-geo-alt pb-2 me-2"></i>

      <div
        class="d-flex align-items-center justify-content-between w-100 border-bottom pb-2"
      >
        <span class="account-item-title">Address Book</span>
        <i class="bi bi-chevron-right"></i>
      </div>
    </button>
  </li>
  <RightOffcanvas title="Address Book" id="address-book-offcanvas">
    <div class="p-1 mb-4">
      <button
        class="border-0 bg-transparent d-flex align-items-center text-secondary"
      >
        <i class="bi bi-plus-circle me-2"></i
        ><span class="text-bold"> new address</span>
      </button>
    </div>
    <div class="row mb-3">
      <div class="col-md-4 mb-3">
        <div class="card border-0 shadow-sm">
          <div
            class="card-header bg-white d-flex justify-content-between align-items-center"
          >
            <span class="card-title">Turki Alharbi</span>
            <div class="address_actions p-0">
              <button class="bg-transparent border-0 btn-sm">
                <i class="bi bi-pencil-square"></i></button
              ><span class="border-start m-2"></span
              ><button class="bg-transparent border-0 btn-sm">
                <i class="bi bi-trash3"></i>
              </button>
            </div>
          </div>
          <div class="card-body d-flex flex-column">
            <span class="text-secondary" style="font-size: 11px"
              >37736373738</span
            >
            <div class="row text-dark">
              <span>Rnhr</span><span>Hdhe</span><span>Hdhduf</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RightOffcanvas>
</template>
