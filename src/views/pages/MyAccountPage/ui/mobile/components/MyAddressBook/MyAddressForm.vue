<template>
  <FormInput
    label="Full name *"
    v-model="addressForm.fields.full_name"
    type="text"
    id="my-address-full_name"
    :class="{
      'is-invalid': addressForm.errors.full_name
        ? addressForm.errors.full_name[0]
        : '',
    }"
    :error="addressForm.errors.full_name ? addressForm.errors.full_name[0] : ''"
  />
  <FormInput
    label="address *"
    v-model="addressForm.fields.address"
    type="text"
    id="my-address-address"
    :class="{
      'is-invalid': addressForm.errors.address
        ? addressForm.errors.address[0]
        : '',
    }"
    :error="addressForm.errors.address ? addressForm.errors.address[0] : ''"
  />
  <FormInput
    label="city *"
    v-model="addressForm.fields.city"
    type="text"
    id="my-address-city"
    :class="{
      'is-invalid': addressForm.errors.city ? addressForm.errors.city[0] : '',
    }"
    :error="addressForm.errors.city ? addressForm.errors.city[0] : ''"
  />
  <FormInput
    label="phone number *"
    v-model="addressForm.fields.phone_number"
    type="number"
    id="my-address-phone_number"
    :class="{
      'is-invalid': addressForm.errors.phone_number
        ? addressForm.errors.phone_number[0]
        : '',
    }"
    :error="
      addressForm.errors.phone_number ? addressForm.errors.phone_number[0] : ''
    "
  />

  <FormInput
    label="street *"
    v-model="addressForm.fields.street"
    type="text"
    id="my-address-street"
    :class="{
      'is-invalid': addressForm.errors.street
        ? addressForm.errors.street[0]
        : '',
    }"
    :error="addressForm.errors.street ? addressForm.errors.street[0] : ''"
  />
</template>

<script setup>
import FormInput from "@/views/components/FormInput/index.vue";
defineProps({
  addressForm: Object,
});
</script>
