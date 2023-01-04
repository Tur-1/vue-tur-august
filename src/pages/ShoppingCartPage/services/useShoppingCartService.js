
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
    const incrementItemQuantity = async (cart_item_id) =>
    {
        if (isCartItemStockSizeLessThanQty(cart_item_id))
        {
            return;
        }

        useLoadingSpinner.show();
        await useShoppingCartApi.incrementItemQuantity(cart_item_id);

        await getCartProducts();

        useLoadingSpinner.hide();
    }
    const decrementItemQuantity = async (cart_item_id) =>
    {

        if (isQuantityNotLessThanZero(cart_item_id))
        {
            return;
        }

        useLoadingSpinner.show();
        await useShoppingCartApi.decrementItemQuantity(cart_item_id);

        await getCartProducts();

        useLoadingSpinner.hide();
    }

    const isCartItemStockSizeLessThanQty = (cart_item_id) =>
    {

        let cartItem = getCartItem(cart_item_id);
        if (cartItem.quantity >= cartItem.stock_size)
        {
            return true;
        }

        return false;
    }
    const isQuantityNotLessThanZero = (cart_item_id) =>
    {
        let cartItem = getCartItem(cart_item_id);
        if (cartItem.quantity == 1)
        {
            return true;
        }

        return false;
    }

    const getCartItem = (cart_item_id) =>
    {
        let cartItem = CartStore.products.find(product => cart_item_id == product.cart_item_id);

        return cartItem;
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