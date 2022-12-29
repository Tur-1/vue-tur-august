<script setup>
const props = defineProps({
  userName: String,
});
</script>

<template>
  <div class="account-image-wrap">
    <div class="account-image">
      <img
        src="https://tur-august.herokuapp.com/assets/images/avatars/avatar_male.png"
        class="rounded-circle"
      />
    </div>
    <div class="account-user-name">
      <span>Hi,</span><span>{{ props.userName }}</span>
    </div>
  </div>
</template>
