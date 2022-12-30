<template>
    <ul class="shop-sidebar-categories">
        <li
            class="shop-sidebar-category-item"
            v-for="(category, index) in category.children"
            :key="index"
        >
            <Link :href="category.link">
                <i class="bi bi-caret-right-fill"></i>
                {{ category.name }}
            </Link>
        </li>
    </ul>
</template>
