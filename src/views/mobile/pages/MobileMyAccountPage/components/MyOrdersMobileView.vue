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

    <BaseRightOffcanvas title="My orders" id="my-orders-offcanvas">
        <MyOrders />
    </BaseRightOffcanvas>
</template>
<script setup>
import MyOrders from "@/Pages/MyAccountPage/components/MyOrders/index.vue";
import BaseRightOffcanvas from "@/components/Base/BaseRightOffcanvas.vue";
</script>
