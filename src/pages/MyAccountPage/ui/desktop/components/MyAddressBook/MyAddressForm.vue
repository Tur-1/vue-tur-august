<template>
  <FormInput
    label="Full name *"
    v-model="myAddressForm.full_name"
    type="text"
    id="my-address-full_name"
    :customClass="{
      'is-invalid': myAddressForm.errors.full_name,
    }"
    :errorMsg="myAddressForm.errors.full_name"
  />
  <FormInput
    label="address *"
    v-model="myAddressForm.address"
    type="text"
    id="my-address-address"
    :customClass="{
      'is-invalid': myAddressForm.errors.address,
    }"
    :errorMsg="myAddressForm.errors.address"
  />
  <FormInput
    label="city *"
    v-model="myAddressForm.city"
    type="text"
    id="my-address-city"
    :customClass="{
      'is-invalid': myAddressForm.errors.city,
    }"
    :errorMsg="myAddressForm.errors.city"
  />
  <FormInput
    label="phone number *"
    v-model="myAddressForm.phone_number"
    type="number"
    id="my-address-phone_number"
    :customClass="{
      'is-invalid': myAddressForm.errors.phone_number,
    }"
    :errorMsg="myAddressForm.errors.phone_number"
  />

  <FormInput
    label="street *"
    v-model="myAddressForm.street"
    type="text"
    id="my-address-street"
    :customClass="{
      'is-invalid': myAddressForm.errors.street,
    }"
    :errorMsg="myAddressForm.errors.street"
  />
</template>

<script setup>
import FormInput from "@/components/Base/FormInput.vue";
defineProps({
  myAddressForm: Object,
});
</script>
