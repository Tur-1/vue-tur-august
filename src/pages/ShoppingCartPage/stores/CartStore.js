import { reactive, ref } from "vue";

const CartStore = reactive({
    products: [],
    cartDetails: [],
    onProgress: false,

});
export default CartStore;