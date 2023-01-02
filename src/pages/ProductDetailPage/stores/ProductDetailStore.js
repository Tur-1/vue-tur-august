import { reactive } from "vue";

const ProductDetailStore = reactive({
    categories: [],
    images: [],
    sizeOptions: [],
    selectedSize: {
        size_id: null,
        product_id: null,
    },
    product: [],
    reviews: [],
    relatedProducts: [],
    onProgress: false,
    selectSize({ size_id, product_id })
    {
        this.selectedSize.size_id = size_id;
        this.selectedSize.product_id = product_id;

    }
});


export default ProductDetailStore;