import { reactive } from "vue";

const ProductDetailStore = reactive({
    categories: [],
    images: [],
    sizeOptions: [],
    product: [],
    reviews: [],
    relatedProducts: [],
    onProgress: false
});


export default ProductDetailStore;