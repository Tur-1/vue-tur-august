
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useCheckoutApi from "@/pages/CheckoutPage/api/useCheckoutApi";
import CheckoutStore from "@/pages/CheckoutPage/stores/CheckoutStore";

export default function useCheckoutService()
{

    const getCheckoutContent = async () =>
    {

        useLoadingSpinner.show();

        let res = await useCheckoutApi.getCheckoutContent();

        CheckoutStore.products = res.data.products;
        CheckoutStore.userAddresses = res.data.userAddresses;
        CheckoutStore.cartDetails = res.data.cartDetails;

        console.log(res.data);

        useLoadingSpinner.hide();

    }


    return {
        getCheckoutContent,

    }
}