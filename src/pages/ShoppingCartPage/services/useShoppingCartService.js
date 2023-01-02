
import { useLoadingSpinner } from "@/components/LoadingSpinner";
import useShoppingCartApi from "@/pages/ShoppingCartPage/api/useShoppingCartApi";
import CartCounter from "@/pages/ShoppingCartPage/stores/CartCounter";
import CartStore from "@/pages/ShoppingCartPage/stores/CartStore";

export default function useShoppingCartService()
{

    const getCartCount = async () =>
    {

        let res = await useShoppingCartApi.getCartCount();

        CartCounter.value = res.data.cartCounter;

    }
    const getCartProducts = async () =>
    {

        // CartStore.onProgress = true;
        useLoadingSpinner.show();


        let response = await useShoppingCartApi.getCartProducts();

        CartStore.products = response.data.products;
        CartCounter.value = CartStore.products.length;
        CartStore.cartDetails = response.data.cartDetails;


        useLoadingSpinner.hide();
        // CartStore.onProgress = false;
    }
    const removeCartItem = async (itemId) =>
    {
        useLoadingSpinner.show();
        let response = await useShoppingCartApi.removeCartItem(itemId);

        await getCartProducts();

        useLoadingSpinner.hide();
    }
    const saveForLater = async ({ productId, cartItemId }) =>
    {
        useLoadingSpinner.show();
        let response = await useShoppingCartApi.saveForLater({
            productId: productId,
            cartItemId: cartItemId
        });

        await getCartProducts();

        useLoadingSpinner.hide();
    }
    const incrementItemQuantity = async (cartItemId) =>
    {
        useLoadingSpinner.show();
        let response = await useShoppingCartApi.incrementItemQuantity(cartItemId);

        await getCartProducts();

        useLoadingSpinner.hide();
    }
    const decrementItemQuantity = async (cartItemId) =>
    {
        useLoadingSpinner.show();
        let response = await useShoppingCartApi.decrementItemQuantity(cartItemId);

        await getCartProducts();

        useLoadingSpinner.hide();
    }


    return {
        getCartCount,
        getCartProducts,
        removeCartItem,
        incrementItemQuantity,
        decrementItemQuantity,
        saveForLater

    }
}