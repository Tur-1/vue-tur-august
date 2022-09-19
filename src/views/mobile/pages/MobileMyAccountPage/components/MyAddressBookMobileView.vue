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

    <BaseRightOffcanvas title="Address Book" id="address-book-offcanvas">
        <MyAddressBook />
    </BaseRightOffcanvas>
</template>
<script setup>
import MyAddressBook from "@/Pages/MyAccountPage/components/MyAddressBook/index.vue";
import BaseRightOffcanvas from "@/components/Base/BaseRightOffcanvas.vue";
</script>
