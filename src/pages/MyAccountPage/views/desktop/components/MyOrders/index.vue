<script setup>
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
</script>
<template>
  <div class="row d-flex justify-content-center">
    <Link
      v-for="(order, index) in MyAccountStore.orders"
      class="col-md-4 col-12 mb-2 pb-1 mt-2 bg-transparent"
      :to="{ name: 'orderPage', params: { id: order.order.id } }"
      :id="'order-' + order.order.id"
    >
      <div class="card shadow-sm p-2">
        <div class="card-body d-flex justify-content-between">
          <h5 class="text-dark">order no #{{ order.order.id }}</h5>
          <span class="text-dark">order details</span>
        </div>
      </div>
      <div
        class="rounded text-center pt-2 pe-3 ps-3 d-flex justify-content-between bg-light text-primary"
      >
        <p style="font-size: 10px">{{ order.order.date }}</p>
        <p>{{ order.order.total }} SAR</p>
      </div>
    </Link>
  </div>
</template>
