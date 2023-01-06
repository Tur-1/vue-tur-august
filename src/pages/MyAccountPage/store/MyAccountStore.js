
import { reactive } from "vue";


const MyAccountStore = reactive({
    userInfo: [],
    orders: [],
    userAddresses: [],
    orderDetail: {
        order: [],
        products: [],
        address: [],
        coupon: [],

    },
});

export default MyAccountStore;