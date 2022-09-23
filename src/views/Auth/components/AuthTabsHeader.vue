<template>
  <ul class="auth-tabs-header nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item auth-head-tab" role="presentation">
      <button
        class="nav-link active"
        id="login-form-tab"
        type="button"
        role="tab"
        data-bs-toggle="tab"
        data-bs-target="#login-form"
        aria-controls="login-form"
        aria-selected="true"
      >
        <span>Sign in</span>
      </button>
    </li>

    <li class="nav-item auth-head-tab" role="presentation">
      <button
        class="nav-link"
        id="register-form-tab"
        data-bs-toggle="tab"
        data-bs-target="#register-form"
        type="button"
        role="tab"
        aria-controls="register-form"
        aria-selected="false"
      >
        <span>Sign up</span>
      </button>
    </li>
  </ul>
</template>
