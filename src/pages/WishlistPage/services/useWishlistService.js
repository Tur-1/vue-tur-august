
import useAuthModal from '@/Auth/services/useAuthModal';
import authUser from '@/Auth/store/authUser';
import { useLoadingSpinner } from '@/components/LoadingSpinner';

import useWishlistPageApi from '@/pages/WishlistPage/api/useWishlistPageApi';
import WishlistStore from '@/pages/WishlistPage/stores/WishlistStore';
import useRouterService from '@/router/useRouterService';


export default function useWishlistService()
{
    return {
        async getUserWishlist()
        {

            WishlistStore.onProgress = true;


            try
            {

                let response = await useWishlistPageApi.getUserWishlist();

                WishlistStore.products = response.data.products;
            } catch (error)
            {
                console.log(error);

            }

            WishlistStore.onProgress = false;

        },

        async addProductToWishlist(productId)
        {


            useLoadingSpinner.show();

            try
            {

                let response = await useWishlistPageApi.addToWishlist(productId);

                if (response.data.requireAuth)
                {
                    useAuthModal.open();

                } else
                {
                    WishlistStore.productsIds = response.data;

                }



            } catch (error)
            {
                console.log(error);

            }
            useLoadingSpinner.hide();
        }
    }
}
