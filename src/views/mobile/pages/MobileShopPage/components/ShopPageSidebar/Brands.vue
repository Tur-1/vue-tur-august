<template>
    <div>
        <label class="fw-600 mb-1 sidebar-border-top">Brand</label>
        <div class="list-group">
            <label
                class="mb-2"
                v-for="(brand, index) in $page.props.brands"
                :key="index"
            >
                <input
                    class="form-check-input me-1"
                    type="checkbox"
                    name="brand[]"
                    :id="'brand-' + brand.id"
                    :value="brand.slug"
                    v-model="filters.brand"
                />
                <span>{{ brand.name }} ({{ brand.products_count }})</span>
            </label>
        </div>
    </div>
</template>
<script setup>
defineProps({
    filters: Object,
});
</script>
<style lang=""></style>
