<template>
  <!-- <ol class="breadcrumb" id="shop-desktop-breadcrumb">
        <li class="breadcrumb-item">
            <Link href="/"> Home </Link>
            <i class="bi bi-chevron-right"></i>
        </li>

        <li
            class="breadcrumb-item"
            v-for="(breadcrumbItem, index) in $page.props.breadcrumb"
            :key="breadcrumbItem.id"
        >
            <Link :href="breadcrumbItem.link">
                {{ breadcrumbItem.name }}
            </Link>
            <i class="bi bi-chevron-right"></i>
        </li>

        <li class="breadcrumb-item" aria-current="page">
            {{ $page.props.category.name }}
        </li>
    </ol> -->
  <ol class="breadcrumb" id="shop-desktop-breadcrumb">
    <li class="breadcrumb-item">
      <a href="/"> Home </a><i class="bi bi-chevron-right"></i>
    </li>
    <li class="breadcrumb-item" aria-current="page">Women</li>
  </ol>
</template>
