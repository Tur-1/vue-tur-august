
import useShopPageApi from '@/pages/ShopPage/api/useShopPageApi'
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";

import { useRoute } from "vue-router";



const useShopPageService = async () =>
{
    const route = useRoute();

    let category = await useShopPageApi.getCategoryPageContent(route.params.categorySlug);

    ShopPageStore.category = category.data.data.category;
}

export default useShopPageService;