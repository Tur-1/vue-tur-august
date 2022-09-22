<script setup>
import MyAccountAvatar from "@/views/mobile/pages/MobileMyAccountPage/components/MyAccountAvatar.vue";
import MyAccountSettings from "@/views/mobile/pages/MobileMyAccountPage/components/MyAccountSettings/index.vue";
import Logout from "@/views/mobile/pages/MobileMyAccountPage/components/Logout.vue";
import MyAddressBook from "@/views/mobile/pages/MobileMyAccountPage/components/MyAddressBook/index.vue";
import RightOffcanvas from "@/views/mobile/components/RightOffcanvas/index.vue";
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

      <Logout />
    </ul>

    <RightOffcanvas title="Address Book" id="address-book-offcanvas">
      <MyAddressBook />
    </RightOffcanvas>

    <RightOffcanvas title="Account Settings" id="account-settings-offcanvas">
      <MyAccountSettings />
    </RightOffcanvas>
    <RightOffcanvas title="My orders" id="my-orders-offcanvas">
    </RightOffcanvas>
  </section>
</template>
