<script setup>
import MyAccountAvatar from "@/pages/MyAccountPage/views/mobile/components/MyAccountAvatar/index.vue";
import MyAddressBook from "@/pages/MyAccountPage/views/desktop/components/MyAddressBook/index.vue";
import MyAccountSettings from "@/pages/MyAccountPage/views/desktop/components/MyAccountSettings/index.vue";
import MyOrders from "@/pages/MyAccountPage/views/desktop/components/MyOrders/index.vue";
import Logout from "@/pages/MyAccountPage/views/mobile/components/Logout/index.vue";
import RightOffcanvas from "@/components/RightOffcanvas/index.vue";
</script>
<template>
  <section>
    <MyAccountAvatar />

    <ul class="account-items">
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
      <RightOffcanvas title="My orders" id="my-orders-offcanvas">
        <MyOrders />
      </RightOffcanvas>
      <li>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#account-settings-offcanvas"
          class="text-dark"
          type="button"
        >
          <i class="bi bi-person-video2 pb-2 me-2"></i>
          <div
            class="d-flex align-items-center justify-content-between w-100 border-bottom pb-2"
          >
            <span class="account-item-title">Account Settings</span>
            <i class="bi bi-chevron-right"></i>
          </div>
        </button>
      </li>
      <RightOffcanvas title="Account Settings" id="account-settings-offcanvas">
        <MyAccountSettings />
      </RightOffcanvas>
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
        <MyAddressBook />
      </RightOffcanvas>
      <Logout />
    </ul>
  </section>
</template>
