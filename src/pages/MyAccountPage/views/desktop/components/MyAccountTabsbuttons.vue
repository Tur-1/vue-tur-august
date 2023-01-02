<template>
  <div
    class="nav nav-tabs d-flex flex-row justify-content-between bg-transparent"
    role="tablist"
    style="flex-wrap: unset !important"
  >
    <button
      role="tab"
      class="account-desktop-tabs-btns active card w-100 collapse-btn me-1"
      id="account-settings-tab"
      data-bs-toggle="tab"
      data-bs-target="#account-settings"
    >
      <span class="d-flex flex-row align-items-center"
        ><div class="icon-circle"><i class="bi bi-gear"></i></div>
        Account Settings
      </span></button
    ><button
      role="tab"
      class="account-desktop-tabs-btns card w-100 collapse-btn me-1"
      id="my-orders-tab"
      data-bs-toggle="tab"
      data-bs-target="#my-orders"
    >
      <span class="d-flex flex-row align-items-center"
        ><div class="icon-circle"><i class="bi bi-boxes"></i></div>
        My Orders
      </span></button
    ><button
      role="tab"
      class="account-desktop-tabs-btns card w-100 collapse-btn"
      id="address-book-tab"
      data-bs-toggle="tab"
      data-bs-target="#address-book"
    >
      <span class="d-flex flex-row align-items-center"
        ><div class="icon-circle"><i class="bi bi-card-list"></i></div>
        Address Book
      </span>
    </button>
  </div>
</template>

<script setup></script>
