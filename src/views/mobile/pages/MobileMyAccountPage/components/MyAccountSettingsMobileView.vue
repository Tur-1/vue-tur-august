<template>
    <li>
        <button
            data-bs-toggle="offcanvas"
            data-bs-target="#account-settings-offcanvas"
            role="button"
            class="text-dark"
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

    <BaseRightOffcanvas
        title="Account Settings"
        id="account-settings-offcanvas"
    >
        <MyAccountSettings />
    </BaseRightOffcanvas>
</template>
<script setup>
import MyAccountSettings from "@/Pages/MyAccountPage/components/MyAccountSettings/index.vue";
import BaseRightOffcanvas from "@/components/Base/BaseRightOffcanvas.vue";
</script>
