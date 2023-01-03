import { reactive } from "vue";

const ShopPageStore = reactive({
    category: [],
    categoryChildren: [],
    categoryParents: [],
    categoryParent: {},
    products: [],
    brands: [],
    colors: [],
    sizeOptions: [],
    pagination: [],
    onProgress: false
});


export default ShopPageStore;