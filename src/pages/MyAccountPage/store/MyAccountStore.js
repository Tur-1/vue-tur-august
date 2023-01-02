
import { reactive } from "vue";


const MyAccountStore = reactive({
    userInfo: [],
    myOrders: [],
    userAddresses: [],
});

export default MyAccountStore;