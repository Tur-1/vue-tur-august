<template>
  <TransitionGroup name="list" tag="div" class="row mb-3">
    <div
      class="col-md-4 mb-3"
      v-for="(address, index) in accountPageContent.userAddresses"
      :key="address.address_id"
    >
      <div class="card border-0 shadow-sm">
        <div
          class="card-header bg-white d-flex justify-content-between align-items-center"
        >
          <span class="card-title">{{ address.full_name }}</span>
          <div class="address_actions p-0">
            <button
              class="bg-transparent border-0 btn-sm"
              @click="$emit('openModal', address)"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <span class="border-start m-2"></span>
            <button
              class="bg-transparent border-0 btn-sm"
              @click="$emit('destroyAddress', address.address_id)"
            >
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
        <div class="card-body d-flex flex-column">
          <span class="text-secondary" style="font-size: 11px">
            {{ address.phone_number }}
          </span>
          <div class="row text-dark">
            <span> {{ address.city }} </span>
            <span> {{ address.address }} </span>
            <span> {{ address.street }} </span>
          </div>
        </div>
      </div>
    </div>
  </TransitionGroup>
</template>

<script setup>
import accountPageContent from "@/views/pages/MyAccountPage/store/accountPageContent";

defineEmits(["destroyAddress", "openModal"]);
</script>
