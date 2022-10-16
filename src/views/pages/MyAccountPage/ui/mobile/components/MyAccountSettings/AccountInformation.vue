<script setup>
import { reactive, ref } from "vue";
import BaseModal from "@/views/components/BaseModal/index.vue";
import BaseInput from "@/views/components/BaseInput/index.vue";
import BaseSelect from "@/views/components/BaseSelect/index.vue";
import userStore from "@/views/pages/MyAccountPage/store/userStore";

let isModalOpen = ref(false);

let userForm = reactive(userStore.information);
let errors = ref({ name: null, email: null, gender: null });

const openAccountModal = () => {
  isModalOpen.value = true;
};
const closeAccountModal = () => {
  isModalOpen.value = false;
};
</script>
<template>
  <div class="row mb-1">
    <div class="card shadow-sm">
      <div class="card-body">
        <header class="d-flex justify-content-between mb-2 align-items-center">
          <span class="card-title text-dark"
            ><strong>ACCOUNT INFO </strong></span
          ><button class="bg-transparent border-0" @click="openAccountModal">
            <i class="bi bi-pencil-square"></i>
          </button>
        </header>
        <div class="text-dark">
          <p>
            <span class="me-1">Name: </span> {{ userStore.information.name }}
          </p>
          <p>
            <span class="me-1">Email: </span>{{ userStore.information.email }}
          </p>
          <p>
            <span class="me-1">Gender: </span>{{ userStore.information.gender }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->

  <BaseModal
    :withForm="true"
    :isOpen="isModalOpen"
    id="account-info-modal"
    title="update account information"
    @closeModal="closeAccountModal"
  >
    <template #form>
      <BaseInput
        label="Name *"
        type="text"
        placeholder="name"
        id="accountName"
        v-model="userForm.name"
        :class="{ 'is-invalid': errors.name }"
        :error="errors.name"
      />

      <BaseInput
        label="Email *"
        type="email"
        placeholder="email"
        v-model="userForm.email"
        id="accountEmail"
        :class="{ 'is-invalid': errors.email }"
        :error="errors.email"
      />
      <BaseSelect
        label="Gender *"
        v-model="userForm.gender"
        id="accountGender"
        :class="{ 'is-invalid': errors.gender }"
        :error="errors.gender"
        :options="['male', 'female']"
      />
    </template>
  </BaseModal>
</template>
