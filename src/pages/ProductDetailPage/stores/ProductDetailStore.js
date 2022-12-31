import { reactive } from "vue";

const ProductDetailStore = reactive({
    categories: [],
    images: [],
    sizeOptions: [],
    product: [],
    reviews: [],
    onProgress: false
});


export default ProductDetailStore;