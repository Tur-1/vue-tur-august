import { reactive } from "vue";

const CheckoutStore = reactive({
    products: [],
    userAddresses: [],
    cartDetails: [],
    coupon: [],
    couponCode: '',
    onProgress: false,
    selectedAddress: null,
    setAddressId(address_id)
    {
        this.selectedAddress = address_id;
    }
});
export default CheckoutStore;