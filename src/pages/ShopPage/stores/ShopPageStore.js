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
    mobilePagination: {
        current_page: '',
        prev_page_url: '',
        next_page_url: '',
    },
    onProgress: false
});


export default ShopPageStore;