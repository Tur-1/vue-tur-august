<template>
  <BaseInput
    label="Full name *"
    v-model="addressForm.fields.full_name"
    type="text"
    id="my-address-full_name"
    :class="{
      'is-invalid': addressForm.errors.full_name,
    }"
    :error="addressForm.errors.full_name"
  />
  <BaseInput
    label="address *"
    v-model="addressForm.fields.address"
    type="text"
    id="my-address-address"
    :class="{
      'is-invalid': addressForm.errors.address,
    }"
    :error="addressForm.errors.address"
  />
  <BaseInput
    label="city *"
    v-model="addressForm.fields.city"
    type="text"
    id="my-address-city"
    :class="{
      'is-invalid': addressForm.errors.city,
    }"
    :error="addressForm.errors.city"
  />
  <BaseInput
    label="phone number *"
    v-model="addressForm.fields.phone_number"
    type="number"
    id="my-address-phone_number"
    :class="{
      'is-invalid': addressForm.errors.phone_number,
    }"
    :error="addressForm.errors.phone_number"
  />

  <BaseInput
    label="street *"
    v-model="addressForm.fields.street"
    type="text"
    id="my-address-street"
    :class="{
      'is-invalid': addressForm.errors.street,
    }"
    :error="addressForm.errors.street"
  />
</template>

<script setup>
import BaseInput from "@/views/components/BaseInput/index.vue";
defineProps({
  addressForm: Object,
});
</script>
