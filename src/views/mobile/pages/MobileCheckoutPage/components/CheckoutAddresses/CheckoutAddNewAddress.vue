<template>
    <div class="mb-3">
        <div class="mb-3 card mt-4 border-0">
            <div class="p-2">
                <a
                    @click="$emit('openMyAddressBookModal')"
                    role="button"
                    class="d-flex align-items-center text-secondary"
                >
                    <i class="bi bi-plus-circle me-2"></i>
                    <span class="text-bold"> new address</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(["openMyAddressBookModal"]);
</script>
