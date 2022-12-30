<template>
    <label class="fw-600 mb-1 sidebar-border-top">Size</label>
    <div class="list-group">
        <label
            class="mb-2"
            v-for="(size, index) in $page.props.sizeOptions"
            :key="index"
        >
            <input
                class="form-check-input me-1"
                type="checkbox"
                :value="size.slug"
                v-model="filters.sizeOptions"
            />
            <span>{{ size.name }} ({{ size.products_count }})</span>
        </label>
    </div>
</template>

<script setup>
defineProps({
    filters: Object,
});
</script>
