import { reactive } from "vue";

const WishlistStore = reactive({
    products: [],
    onProgress: false,
    counter: 0,
});


export default WishlistStore;