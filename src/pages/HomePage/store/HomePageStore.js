import { reactive, ref } from "vue";

const HomePageStore = reactive({
    largeBanners: [],
    mediumBanners: [],
    products: [],
    onProgress: false,
})

export default HomePageStore;