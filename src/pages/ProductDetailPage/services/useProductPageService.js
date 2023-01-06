
import { useLoadingSpinner } from '@/components/LoadingSpinner';
import useProductPageApi from '@/pages/ProductDetailPage/api/useProductPageApi';
import ProductDetailStore from '@/pages/ProductDetailPage/stores/ProductDetailStore';
import useShopPageApi from '@/pages/ShopPage/api/useShopPageApi'
import useRouterService from '@/router/useRouterService';
import useToastNotification from '@/components/Toast/useToastNotification';

import { useRoute } from "vue-router";
import { ref } from 'vue';
import { isNotNull } from '@/helpers';
import CartCounter from '@/pages/ShoppingCartPage/stores/CartCounter';
import useShoppingCartService from '@/pages/ShoppingCartPage/services/useShoppingCartService';
import useAuthModal from '@/Auth/services/useAuthModal';
import GuestStore from '@/pages/ProductDetailPage/stores/GuestStore';


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

                ProductDetailStore.product = response.data.product;
                ProductDetailStore.categories = response.data.categories;
                ProductDetailStore.images = response.data.images;
                ProductDetailStore.sizeOptions = response.data.sizeOptions;
                ProductDetailStore.reviews = response.data.reviews;
                ProductDetailStore.relatedProducts = response.data.relatedProducts;

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
                if (error.response.status == 401)
                {


                    useAuthModal.open();

                }
                if (error.response.status == 422)
                {
                    review.value.errors = error.response.data.errors.comment;
                }

            }


            useLoadingSpinner.hide();

        },
        async addToShoppingCart()
        {

            if (isNotNull(ProductDetailStore.selectedSize.size_id) || isNotNull(ProductDetailStore.selectedSize.product_id))
            {
                useLoadingSpinner.show();

                let response = await useProductPageApi.addToShoppingCart(ProductDetailStore.selectedSize);

                if (response.data.message)
                {
                    const { getCartCount } = useShoppingCartService();

                    await getCartCount();
                    useToastNotification.open(response.data.message);
                }


                useLoadingSpinner.hide();
            }

        }


    }
}
