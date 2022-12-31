
import { useLoadingSpinner } from '@/components/LoadingSpinner';
import useProductPageApi from '@/pages/ProductDetailPage/api/useProductPageApi';
import ProductDetailStore from '@/pages/ProductDetailPage/stores/ProductDetailStore';
import useShopPageApi from '@/pages/ShopPage/api/useShopPageApi'
import useRouterService from '@/router/useRouterService';
import useToastNotification from '@/components/Toast/useToastNotification';

import { useRoute } from "vue-router";
import { ref } from 'vue';


const review = ref({
    comment: "",
    errors: null,
});
export default function useProductPageService()
{
    return {
        async getProductDetail()
        {

            ProductDetailStore.onProgress = true;
            let route = useRoute();

            try
            {

                let response = await useProductPageApi.getProductDetail(route.params.productSlug);
                console.log(response.data);
                ProductDetailStore.product = response.data.product;
                ProductDetailStore.categories = response.data.categories;
                ProductDetailStore.images = response.data.images;
                ProductDetailStore.sizeOptions = response.data.sizeOptions;
                ProductDetailStore.reviews = response.data.reviews;


            } catch (error)
            {
                if (error.response.status == 404)
                {
                    useRouterService.redirectToRoute('pageNotFound');
                }
            }

            ProductDetailStore.onProgress = false;

        },
        review,
        async sendComment(productSlug)
        {


            useLoadingSpinner.show();

            try
            {
                let response = await useProductPageApi.sendComment(productSlug, review.value);
                useToastNotification.open(response.data.message);

                review.value.comment = '';
            } catch (error)
            {
                if (error.response.status == 422)
                {
                    review.value.errors = error.response.data.errors.comment;
                }

            }


            useLoadingSpinner.hide();

        }


    }
}
