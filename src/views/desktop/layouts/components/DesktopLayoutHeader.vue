<template>
  <header class="desktop-navbar">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <h3 class="navbar-brand">
          <Link class="text-dark" to="/"> August </Link>
        </h3>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="active" to="/"> Home </Link>
            </li>
            <li class="nav-item">
              <Link class="" to="/"> women </Link>
            </li>
            <li class="nav-item">
              <Link class="" to="/"> men </Link>
            </li>
          </ul>

          <div class="nav-icons-container">
            <Link to="my-account" class="nav-icons">
              <img
                class="svgInject"
                alt="Evara"
                src="@/assets/icons/account.svg"
              />
            </Link>
            <Link class="nav-icons" to="/wishlist">
              <img
                class="svgInject"
                alt="Evara"
                src="@/assets/icons/icon-heart.svg"
              />
            </Link>
            <Link class="nav-icons" to="/cart">
              <img alt="Evara" src="@/assets/icons/icon-cart.svg" />
              <span class="badge badge-circle"> 3 </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
