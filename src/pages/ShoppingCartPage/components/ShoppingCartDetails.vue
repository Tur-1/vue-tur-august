<template>
  <div class="col-lg-4 cart-details-container">
    <div class="card border-0 p-0">
      <div class="card-body p-0 pt-2">
        <ul class="list-group list-group-flush p-2">
          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0"
          >
            cart subtotal
            <span>534 SAR</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center px-0"
          >
            shipment fees
            <span> Free </span>
          </li>

          <li
            class="list-group-item d-flex justify-content-between align-items-center border-0 px-0"
          >
            <div>
              <strong>The total amount </strong>
              <strong>
                <p class="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span><strong>534 SAR</strong></span>
          </li>
        </ul>
        <Link
          to="/checkout"
          class="btn btn-primary shooping-cart-details-button"
        >
          <i class="bi bi-credit-card me-2"></i>
          proceed to checkout
        </Link>
      </div>
    </div>
  </div>
</template>
<script setup></script>
