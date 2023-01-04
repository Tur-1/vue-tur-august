
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useToastNotification from "@/components/Toast/useToastNotification";
import useCheckoutApi from "@/pages/CheckoutPage/api/useCheckoutApi";
import CheckoutStore from "@/pages/CheckoutPage/stores/CheckoutStore";
import MyAccountStore from "@/pages/MyAccountPage/store/MyAccountStore";
import useRouterService from "@/router/useRouterService";

export default function useCheckoutService()
{

    const getCheckoutContent = async () =>
    {

        useLoadingSpinner.show();

        let res = await useCheckoutApi.getCheckoutContent();

        CheckoutStore.products = res.data.products;
        MyAccountStore.userAddresses = res.data.userAddresses;

        CheckoutStore.cartDetails = res.data.cartDetails;

        useLoadingSpinner.hide();

    }

    const applyCoupon = async () =>
    {

        useLoadingSpinner.show();


        try
        {
            let res = await useCheckoutApi.applyCoupon(CheckoutStore.couponCode, CheckoutStore.cartDetails.total);

            CheckoutStore.cartDetails = res.data.cartDetails;

            if (CheckoutStore.cartDetails.coupon == null)
            {
                CheckoutStore.couponCode = '';
                CheckoutStore.couponErorrMsg = null;
            }
        } catch (error)
        {
            if (!error.response.data.success)
            {
                CheckoutStore.couponErorrMsg = error.response.data.message;
            }

        }

        useLoadingSpinner.hide();

    }

    const buyNow = async () =>
    {
        useLoadingSpinner.show();

        try
        {
            let res = await useCheckoutApi.buyNow(CheckoutStore.selectedAddress);

            useToastNotification.open(res.data.message);
            useRouterService.redirectToRoute('home');
        } catch (error)
        {
            if (!error.response.data.success)
            {
                useToastNotification.open(error.response.data.message, false);
            }

        }

        useLoadingSpinner.hide();
    }
    return {
        getCheckoutContent,
        applyCoupon,
        buyNow
    }
}