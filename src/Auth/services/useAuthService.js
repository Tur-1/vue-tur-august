import useAuthApi from "@/Auth/api/useAuthApi";
import loginForm from "@/Auth/store/loginForm";
import registerForm from "@/Auth/store/registerForm";
import useAuthModal from "@/Auth/services/useAuthModal";
import useRouterService from "@/router/useRouterService";
import authUser from "@/Auth/store/authUser";
import { isNotNull } from "@/helpers";
import useToastNotification from "@/components/Toast/useToastNotification";
import useShoppingCartService from "@/pages/ShoppingCartPage/services/useShoppingCartService";
import useProductPageService from "@/pages/ProductDetailPage/services/useProductPageService";
import WishlistStore from "@/pages/WishlistPage/stores/WishlistStore";
import ProductDetailStore from "@/pages/ProductDetailPage/stores/ProductDetailStore";

export default function useAuthService()
{
    const login = async () =>
    {
        loginForm.showProgress();
        loginForm.clearErrors();
        try
        {
            let response = await useAuthApi.login(loginForm.fields);

            authUser.setAuthUser(response.data.user);
            authUser.setAuthUser(response.data.access_token);

            useAuthModal.close();

            if (isNotNull(response.data.message))
            {
                useToastNotification.open(response.data.message);
            }


            if (response.data.redirect_to == 'product_detail')
            {
                const { getCartCount } = useShoppingCartService();
                const { getProductReviews } = useProductPageService();
                await getCartCount();
                await getProductReviews();
            }
            if (response.data.redirect_to == 'wishlist')
            {


            }

            useRouterService.redirectToIntendedPath();


        } catch (error)
        {

            if (error.response.status == 422)
            {
                loginForm.setErrors(error.response);
            }
        }

        loginForm.hideProgress();
    };
    const register = async () =>
    {
        loginForm.showProgress();
        registerForm.clearErrors();
        try
        {
            await useAuthApi.register(registerForm.fields);

            useAuthModal.close();

            if (isNotNull(response.data.message))
            {
                useToastNotification.open(response.data.message);
            }
            useRouterService.redirectToIntendedPath();
        } catch (error)
        {
            if (error.response.status == 422)
            {
                registerForm.setErrors(error.response);
            }
        }

        loginForm.hideProgress();
    };

    return {
        login,
        register
    }
}

