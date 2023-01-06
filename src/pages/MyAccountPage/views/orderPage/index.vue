<script setup>
import useMyAccountService from "@/pages/MyAccountPage/services/useMyAccountService";
import { onMounted } from "vue";
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
import defultImage from "@/assets/images/defult-card-image.png";
const { showOrder } = useMyAccountService();
onMounted(showOrder);
</script>
<template>
  <section class="container mb-5 mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-7">
        <div class="card border-0 bg-white mb-3">
          <div class="card-body" style="font-size: 16px; font-weight: 600">
            <div class="d-flex justify-content-between mb-2">
              <div class="d-flex">
                <i class="bi bi-box-seam me-3"></i>
                <span class="text-uppercase">order no :</span>
              </div>
              <span>#{{ MyAccountStore.orderDetail.order.id }}</span>
            </div>
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <i class="bi bi-calendar2-minus me-3"></i>
                <span class="text-uppercase">order date :</span>
              </div>
              <span>{{ MyAccountStore.orderDetail.order.date }}</span>
            </div>
          </div>
        </div>
        <div class="card mt-3 mb-4">
          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
              <thead class="thead-light">
                <tr>
                  <th class="border-0 rounded-start">#</th>
                  <th class="border-0">name</th>
                  <th class="border-0">brand</th>
                  <th class="border-0">size</th>
                  <th class="border-0">price</th>
                  <th class="border-0">quantity</th>
                  <th class="border-0">total</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in MyAccountStore.orderDetail.products"
                  style="font-size: 13px"
                >
                  <td>
                    <a href="#" class="d-flex align-items-center">
                      <img
                        :src="product.product_image ?? defultImage"
                        class="rounded me-3"
                        style="max-width: 70px"
                        alt="Avatar"
                      />
                    </a>
                  </td>
                  <td>
                    <span>{{ product.product_name }}</span>
                  </td>
                  <td>
                    <span>{{ product.product_brand }}</span>
                  </td>
                  <td>
                    <span>{{ product.product_size }}</span>
                  </td>
                  <td>
                    <span>{{ product.product_price }} SAR</span>
                  </td>
                  <td>
                    <span>{{ product.product_quantity }}</span>
                  </td>
                  <td>
                    <span>{{ product.total_price }} SAR</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card border-0 bg-white">
          <div class="border-bottom text-start">
            <h6 class="p-3 mb-0">order detals</h6>
          </div>

          <div class="card-body p-0">
            <ul class="list-group ist-group-flush">
              <li
                class="list-group-item d-flex justify-content-between border-0"
              >
                <span class="text-center">SubTotal</span>
                <span class="product-subtotal" colspan="2">
                  {{ MyAccountStore.orderDetail.order.subTotal }} SAR
                </span>
              </li>

              <li
                class="list-group-item d-flex justify-content-between border-0"
              >
                <span class="text-center">Shipping</span>
                <span class="product-subtotal" colspan="2">
                  {{ MyAccountStore.orderDetail.order.shipping_fees }}
                </span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between border-0"
                v-if="MyAccountStore.orderDetail.coupon"
              >
                <span class="text-center"
                  >Discount: (
                  {{ MyAccountStore.orderDetail.coupon.code }} )</span
                >
                <span class="product-subtotal" colspan="2">
                  {{ MyAccountStore.orderDetail.coupon.discounted_amount }} SAR
                </span>
              </li>

              <li
                class="list-group-item d-flex justify-content-between border-0"
              >
                <span class="text-center">Total</span>
                <span class="product-subtotal" colspan="2">
                  {{ MyAccountStore.orderDetail.order.total }} SAR
                </span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between border-0"
              >
                <span class="text-center">Status</span>
                <span class="badge text-bg-warning">
                  {{ MyAccountStore.orderDetail.order.status }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
td {
  vertical-align: middle !important;
  text-align: center;
}
</style>
