
import useShopPageApi from '@/pages/ShopPage/api/useShopPageApi'
import ShopPageStore from "@/pages/ShopPage/stores/ShopPageStore";
import useRouterService from '@/router/useRouterService';

import { useRoute } from "vue-router";



export default function useShopPageService()
{
    return {
        async getCategoryPageContent({ categorySlug, query, url } = {})
        {

            ShopPageStore.onProgress = true;


            try
            {

                let response = await useShopPageApi.getCategoryPageContent(categorySlug, query, url);

                ShopPageStore.category = response.data.category;
                ShopPageStore.categoryChildren = response.data.categoryChildren;
                ShopPageStore.categoryParents = response.data.categoryParents;
                ShopPageStore.categoryParent = response.data.categoryParent;
                ShopPageStore.brands = response.data.brands;
                ShopPageStore.colors = response.data.colors;
                ShopPageStore.sizeOptions = response.data.sizeOptions;
                ShopPageStore.products.list = response.data.products.data;
                ShopPageStore.pagination = response.data.products.meta.pagination;
                ShopPageStore.mobilePagination = response.data.products.meta.pagination

            } catch (error)
            {

                if (error.response.status == 404)
                {
                    useRouterService.redirectToRoute('pageNotFound');
                }
            }

            ShopPageStore.onProgress = false;

        }
    }
}
